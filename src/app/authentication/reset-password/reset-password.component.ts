import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-reset-password',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, RouterLink],
    templateUrl: './reset-password.component.html',
    styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
    resetForm: FormGroup;
    token: string;
    isPassword1Visible = false;
    isPassword2Visible = false;
    isPassword3Visible = false;
    passwordStrength = '';
    passwordFeedback = '';

    constructor(
        private fb: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authService: AuthService,
        public themeService: CustomizerSettingsService
    ) {
        this.resetForm = this.fb.group({
            newPassword: ['', [Validators.required, Validators.minLength(8)]],
            confirmPassword: ['', Validators.required]
        }, { validator: this.passwordMatchValidator });
    }

    ngOnInit() {
        this.token = this.route.snapshot.queryParams['token'];
        if (!this.token) {
            this.router.navigate(['/authentication/sign-in']);
        }
    }

    passwordMatchValidator(g: FormGroup) {
        return g.get('newPassword')?.value === g.get('confirmPassword')?.value
            ? null : {'mismatch': true};
    }

    onSubmit() {
        if (this.resetForm.valid) {
            this.authService.resetPassword(this.token, this.resetForm.get('newPassword')?.value)
                .subscribe({
                    next: () => {
                        // Handle success (e.g., show success message, navigate to login)
                        this.router.navigate(['/authentication/sign-in']);
                    },
                    error: (error) => {
                        // Handle error (e.g., show error message)
                        console.error('Password reset failed', error);
                    }
                });
        }
    }

    togglePassword1Visibility() {
        this.isPassword1Visible = !this.isPassword1Visible;
    }

    togglePassword2Visibility() {
        this.isPassword2Visible = !this.isPassword2Visible;
    }

    togglePassword3Visibility() {
        this.isPassword3Visible = !this.isPassword3Visible;
    }

    onPasswordInput() {
        const password = this.resetForm.get('newPassword')?.value;
        this.checkPasswordStrength(password);
    }

    private checkPasswordStrength(password: string) {
        // Implement password strength check logic here
        // Update this.passwordStrength and this.passwordFeedback
    }
}