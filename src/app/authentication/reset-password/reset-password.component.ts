import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';
import { ValidationService } from '../../services/validation.service';

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
    email: string;
    isPassword2Visible: boolean = false;
    isPassword3Visible: boolean = false;
    passwordStrength: string = '';
    passwordFeedback: string[] = [];
    isLoading: boolean = false;
    errorMessage: string = '';

    constructor(
        private fb: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authService: AuthService,
        public themeService: CustomizerSettingsService,
        private validationService: ValidationService
    ) {
        this.resetForm = this.fb.group({
            newPassword: ['', [Validators.required, this.validationService.passwordValidator()]],
            confirmPassword: ['', Validators.required]
        }, { validator: this.passwordMatchValidator });
    }

    ngOnInit() {
        this.token = this.route.snapshot.queryParams['token'];
        this.email = this.route.snapshot.queryParams['email'];
    }

    passwordMatchValidator(g: FormGroup) {
        return g.get('newPassword')?.value === g.get('confirmPassword')?.value
            ? null : {'mismatch': true};
    }

    onSubmit() {
        if (this.resetForm.valid) {
            this.isLoading = true;
            this.errorMessage = '';
            this.authService.resetPassword(this.email, this.token, this.resetForm.get('newPassword')?.value)
                .subscribe({
                    next: () => {
                        this.isLoading = false;
                        this.router.navigate(['/authentication/sign-in']);
                    },
                    error: (error) => {
                        this.isLoading = false;
                        console.error('Password reset failed', error);
                        this.errorMessage = error.error?.message || 'Password reset failed. Please try again.';
                    }
                });
        }
    }

    togglePassword2Visibility() {
        this.isPassword2Visible = !this.isPassword2Visible;
    }

    togglePassword3Visibility() {
        this.isPassword3Visible = !this.isPassword3Visible;
    }

    onPasswordInput() {
        const password = this.resetForm.get('newPassword')?.value;
        if (password) {
            this.checkPasswordStrength(password);
        } else {
            this.passwordStrength = '';
            this.passwordFeedback = [];
        }
    }

    private checkPasswordStrength(password: string) {
        this.passwordFeedback = [];
        
        if (password.length < 8) {
            this.passwordFeedback.push('Password should be at least 8 characters long.');
        }
        if (!/[A-Z]/.test(password)) {
            this.passwordFeedback.push('Include at least one uppercase letter.');
        }
        if (!/[a-z]/.test(password)) {
            this.passwordFeedback.push('Include at least one lowercase letter.');
        }
        if (!/[0-9]/.test(password)) {
            this.passwordFeedback.push('Include at least one number.');
        }
        if (!/[!@#$%^&*]/.test(password)) {
            this.passwordFeedback.push('Include at least one special character (!@#$%^&*).');
        }

        if (this.passwordFeedback.length === 0) {
            this.passwordStrength = 'Strong';
        } else if (this.passwordFeedback.length <= 2) {
            this.passwordStrength = 'Medium';
        } else {
            this.passwordStrength = 'Weak';
        }
    }
}