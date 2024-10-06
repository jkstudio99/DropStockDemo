import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';
import { NgClass } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { LoginModel } from '../../models/LoginModel';
import { PasswordStrengthService } from '../../services/password.strength.service';
import { ValidationService } from '../../services/validation.service';

@Component({
    selector: 'app-sign-in',
    standalone: true,
    imports: [RouterLink, NgClass, ReactiveFormsModule],
    templateUrl: './sign-in.component.html',
    styleUrl: './sign-in.component.scss'
})
export class SignInComponent implements OnInit {
    isToggled = false;
    loginForm: FormGroup;
    isPasswordVisible: boolean = false;
    passwordStrength: string = '';
    passwordFeedback: string[] = [];

    constructor(
        public themeService: CustomizerSettingsService,
        private authService: AuthService,
        private router: Router,
        private fb: FormBuilder,
        private passwordStrengthService: PasswordStrengthService,
        private validationService: ValidationService
    ) {
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }

    ngOnInit() {
        this.loginForm = this.fb.group({
            username: ['', [Validators.required]],
            password: ['', [Validators.required, this.validationService.passwordValidator()]]
        });

        this.loginForm.get('password')?.valueChanges.subscribe(() => {
            this.onPasswordInput();
        });
    }

    togglePasswordVisibility(): void {
        this.isPasswordVisible = !this.isPasswordVisible;
    }

    onSubmit(): void {
        if (this.loginForm.valid) {
            const loginModel: LoginModel = {
                username: this.loginForm.get('username')?.value,
                password: this.loginForm.get('password')?.value
            };
            this.authService.login(loginModel).subscribe({
                next: () => {
                    this.router.navigate(['/dashboard']);
                },
                error: (error) => {
                    console.error('Login failed', error);
                    // Handle login error (e.g., show error message)
                }
            });
        }
    }

    onPasswordInput(): void {
        const password = this.loginForm.get('password')?.value;
        if (password) {
            const result = this.passwordStrengthService.checkStrength(password);
            this.passwordStrength = result.strength;
            this.passwordFeedback = result.feedback;
        } else {
            this.passwordStrength = '';
            this.passwordFeedback = [];
        }
    }
}