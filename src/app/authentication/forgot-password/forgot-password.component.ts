import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-forgot-password',
    standalone: true,
    imports: [RouterLink, ReactiveFormsModule],
    templateUrl: './forgot-password.component.html',
    styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent implements OnInit {
    isToggled = false;
    forgotPasswordForm: FormGroup;
    isLoading: boolean = false;
    errorMessage: string = '';
    successMessage: string = '';

    constructor(
        public themeService: CustomizerSettingsService,
        private fb: FormBuilder,
        private authService: AuthService
    ) {
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }

    ngOnInit() {
        this.forgotPasswordForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]]
        });
    }

    onSubmit(): void {
        if (this.forgotPasswordForm.valid) {
            this.isLoading = true;
            this.errorMessage = '';
            this.successMessage = '';
            this.authService.forgotPassword(this.forgotPasswordForm.get('email')?.value).subscribe({
                next: (response) => {
                    this.isLoading = false;
                    this.successMessage = 'Password reset link sent. Please check your email.';
                },
                error: (error: HttpErrorResponse) => {
                    this.isLoading = false;
                    console.error('Forgot password request failed', error);
                    this.errorMessage = error.error?.message || 'Failed to send reset link. Please try again.';
                }
            });
        }
    }
}