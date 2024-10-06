import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.BaseAPIUrl;

  constructor(private http: HttpClient) { }

  register(registerModel: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/authentication/register-user`, registerModel);
  }

  login(loginModel: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/authentication/login`, loginModel).pipe(
      tap((response: any) => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('refreshToken', response.refreshToken);
      })
    );
  }

  logout(): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/authentication/logout`, {});
  }

  refreshToken(): Observable<any> {
    const refreshToken = localStorage.getItem('refreshToken');
    return this.http.post(`${this.apiUrl}/api/authentication/refresh-token`, { refreshToken });
  }

  validateToken(token: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/authentication/validate-token`, { token });
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  forgotPassword(email: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/authentication/forgot-password`, { email });
  }

  resetPassword(email: string, token: string, newPassword: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/authentication/reset-password`, { email, token, newPassword });
  }

  confirmEmail(token: string, email: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/authentication/confirm-email`, { token, email });
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
