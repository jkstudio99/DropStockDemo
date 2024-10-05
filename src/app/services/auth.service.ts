import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError, of } from 'rxjs';
import { tap, catchError, map, shareReplay, switchMap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { LoginModel } from '../models/LoginModel';
import { TokenResponse } from '../models/jwt-model/Response/TokenResponse';
import { ResponseModel } from '../models/ResponseModel';
import { RegisterModel } from '../models/RegisterModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.BaseAPIUrl}/Authentication`;
  private tokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  private refreshTokenTimeout: any;

  constructor(private http: HttpClient) {
    this.loadToken();
  }

  private loadToken() {
    const token = this.getStoredToken();
    if (token) {
      this.tokenSubject.next(token);
      this.startRefreshTokenTimer();
    }
  }

  private startRefreshTokenTimer() {
    // Parse the JWT to get the expiration time
    const jwtToken = JSON.parse(atob(this.tokenSubject.value!.split('.')[1]));
    const expires = new Date(jwtToken.exp * 1000);
    const timeout = expires.getTime() - Date.now() - (60 * 1000); // Refresh 1 minute before expiry
    this.refreshTokenTimeout = setTimeout(() => this.refreshToken().subscribe(), timeout);
  }

  login(loginModel: LoginModel): Observable<TokenResponse> {
    return this.http.post<TokenResponse>(`${this.apiUrl}/login`, loginModel).pipe(
      tap(response => this.setToken(response)),
      catchError(this.handleError)
    );
  }

  logout(): Observable<ResponseModel> {
    return this.http.post<ResponseModel>(`${this.apiUrl}/logout`, {}).pipe(
      tap(() => {
        this.clearToken();
        localStorage.removeItem('user'); // Clear user data if stored
        // Clear any other application state related to the user
      }),
      catchError(this.handleError)
    );
  }

  refreshToken(): Observable<any> {
    return this.http.post<TokenResponse>(`${this.apiUrl}/refresh-token`, {}).pipe(
      tap(response => this.setToken(response)),
      catchError(error => {
        this.clearToken();
        return throwError(() => error);
      })
    );
  }

  getToken(): Observable<string | null> {
    return this.tokenSubject.asObservable();
  }

  isLoggedIn(): Observable<boolean> {
    return this.getToken().pipe(map(token => !!token));
  }

  getCurrentUser(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/current-user`).pipe(
      shareReplay(1),
      catchError(this.handleError)
    );
  }

  hasRole(role: string): Observable<boolean> {
    return this.getCurrentUser().pipe(
      map(user => user.roles.includes(role))
    );
  }

  private setToken(response: TokenResponse) {
    const token = response && response.token;
    if (token) {
      this.setStoredToken(token);
      this.tokenSubject.next(token);
      this.startRefreshTokenTimer();
    }
  }

  private clearToken() {
    this.setStoredToken(null);
    this.tokenSubject.next(null);
    this.stopRefreshTokenTimer();
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }

  private getStoredToken(): string | null {
    return localStorage.getItem('token');
  }

  private setStoredToken(token: string | null): void {
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
  }

  private stopRefreshTokenTimer() {
    clearTimeout(this.refreshTokenTimeout);
  }

  register(registerModel: RegisterModel): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, registerModel).pipe(
      catchError(this.handleError)
    );
  }

  forgotPassword(email: string): Observable<ResponseModel> {
    return this.http.post<ResponseModel>(`${this.apiUrl}/forgot-password`, { email }).pipe(
      catchError(this.handleError)
    );
  }

  resetPassword(token: string, newPassword: string): Observable<ResponseModel> {
    return this.http.post<ResponseModel>(`${this.apiUrl}/reset-password`, { token, newPassword }).pipe(
      catchError(this.handleError)
    );
  }
}
