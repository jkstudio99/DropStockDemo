import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { RegisterModel } from '../models/RegisterModel';
import { LoginModel } from '../models/LoginModel';
import { TokenResponse } from '../models/jwt-model/Response/TokenResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  private apiUrl = environment.BaseAPIUrl;

  constructor(private http: HttpClient) {
    this.loggedIn.next(!!localStorage.getItem('token'));
  }

  register(registerModel: RegisterModel): Observable<any> {
    return this.http.post(`${this.apiUrl}/authentication/register-user`, registerModel).pipe(
      catchError(error => {
        console.error('Registration error', error);
        return throwError(() => new Error(error.error?.message || 'Registration failed'));
      })
    );
  }

  login(loginModel: LoginModel): Observable<TokenResponse> {
    return this.http.post<TokenResponse>(`${this.apiUrl}/authentication/login`, loginModel).pipe(
      tap((response: TokenResponse) => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('refreshToken', response.refreshToken);
        localStorage.setItem('userData', JSON.stringify(response.userData));
        this.loggedIn.next(true);
      }),
      catchError(error => {
        console.error('Login error', error);
        return throwError(() => new Error(error.error?.message || 'Login failed'));
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('userData');
    this.loggedIn.next(false);
  }

  refreshToken(): Observable<any> {
    const refreshToken = localStorage.getItem('refreshToken');
    return this.http.post(`${this.apiUrl}/authentication/refresh-token`, { refreshToken });
  }

  validateToken(token: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/authentication/validate-token`, { token });
  }

  isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  forgotPassword(email: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/authentication/forgot-password`, { email });
  }
  resetPassword(email: string, token: string, newPassword: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/authentication/reset-password`, { email, token, newPassword })
      .pipe(
        catchError(error => {
          console.error('Password reset error', error);
          return throwError(() => new Error(error.error?.message || 'Password reset failed'));
        })
      );
  }
  
  confirmEmail(token: string, email: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/authentication/confirm-email`, { token, email });
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
