import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';
import { AuthService } from '../../services/auth.service';
import { tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

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
        this.authService.logout().pipe(
            tap(() => this.router.navigate(['/authentication/sign-in'])),
            catchError(error => {
                console.error('Logout failed', error);
                // Handle logout error if necessary
                return throwError(() => error);
            })
        ).subscribe({
            error: (err) => {
                console.error('Unhandled logout error', err);
                // Additional error handling if needed
            }
        });
    }
}