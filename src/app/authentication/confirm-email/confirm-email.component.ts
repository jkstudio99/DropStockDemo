import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-confirm-email',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './confirm-email.component.html',
    styleUrls: ['./confirm-email.component.scss']
})
export class ConfirmEmailComponent implements OnInit {
    token: string;
    email: string;
    confirmationSuccess: boolean = false;
    errorMessage: string = '';

    constructor(
        public themeService: CustomizerSettingsService,
        private route: ActivatedRoute,
        private authService: AuthService,
        private router: Router
    ) {}

    ngOnInit() {
        this.token = this.route.snapshot.queryParams['token'];
        this.email = this.route.snapshot.queryParams['email'];
        this.confirmEmail();
    }

    confirmEmail() {
        this.authService.confirmEmail(this.token, this.email).subscribe({
            next: () => {
                this.confirmationSuccess = true;
            },
            error: (error) => {
                console.error('Email confirmation failed', error);
                this.errorMessage = 'Email confirmation failed. Please try again.';
            }
        });
    }

    navigateToDashboard() {
        this.router.navigate(['/dashboard']);
    }
}