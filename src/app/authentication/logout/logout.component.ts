import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';
import { AuthService } from '../../services/auth.service';
import { tap, catchError } from 'rxjs/operators';
import { throwError, from } from 'rxjs';

@Component({
    selector: 'app-logout',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './logout.component.html',
    styleUrl: './logout.component.scss'
})
export class LogoutComponent implements OnInit {
    isToggled = false;

    constructor(
        public themeService: CustomizerSettingsService,
        private authService: AuthService,
        private router: Router
    ) {
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }

    ngOnInit() {
        from(Promise.resolve(this.authService.logout())).pipe(
            tap(() => {
                // Successfully logged out
                this.router.navigate(['/authentication/sign-in']);
            }),
            catchError(error => {
                console.error('Logout failed', error);
                // Handle logout error
                this.handleLogoutError(error);
                return throwError(() => error);
            })
        ).subscribe({
            error: (err: unknown) => {
                console.error('Unhandled logout error', err);
                // This should not be reached due to catchError above,
                this.handleLogoutError(err);
            }
        });
    }

    private handleLogoutError(error: any): void {
        // Implement error handling logic here
        // For example, show an error message to the user
        // and/or redirect to an error page
        console.error('Error during logout:', error);
        // TODO: Add user-facing error notification
        this.router.navigate(['/error-page']);
    }
}