import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { RegisterModel } from '../models/RegisterModel';
import { LoginModel } from '../models/LoginModel';
import { TokenResponse } from '../models/jwt-model/Response/TokenResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.BaseAPIUrl;

  constructor(private http: HttpClient) { }

  register(registerModel: RegisterModel): Observable<any> {
    return this.http.post(`${this.apiUrl}/authentication/register-user`, registerModel).pipe(
      map((response: any) => {
        if (response.token) {
          localStorage.setItem('token', response.token);
          return { status: 'Success', message: 'Registration successful' };
        } else {
          return { status: 'Error', message: 'Registration failed' };
        }
      })
    );
  }

  login(loginModel: LoginModel): Observable<TokenResponse> {
    return this.http.post<TokenResponse>(`${this.apiUrl}/authentication/login`, loginModel).pipe(
      tap((response: TokenResponse) => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('refreshToken', response.refreshToken);
        // You might want to store user information as well
        localStorage.setItem('userData', JSON.stringify(response.userData));
      })
    );
  }

  logout(): Observable<any> {
    return this.http.post(`${this.apiUrl}/authentication/logout`, {}).pipe(
      tap(() => {
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('userData');
      })
    );
  }

  refreshToken(): Observable<any> {
    const refreshToken = localStorage.getItem('refreshToken');
    return this.http.post(`${this.apiUrl}/authentication/refresh-token`, { refreshToken });
  }

  validateToken(token: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/authentication/validate-token`, { token });
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
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
