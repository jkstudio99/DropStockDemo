import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';
import { NgClass } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { LoginModel } from '../../models/LoginModel';

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

    constructor(
        public themeService: CustomizerSettingsService,
        private authService: AuthService,
        private router: Router,
        private fb: FormBuilder
    ) {
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }

    ngOnInit() {
        this.loginForm = this.fb.group({
            username: ['', [Validators.required]],
            password: ['', [Validators.required, Validators.minLength(8)]]
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
        this.checkPasswordStrength(password);
    }

    private checkPasswordStrength(password: string): void {
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumbers = /\d/.test(password);
        const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        if (password.length < 8) {
            this.passwordStrength = 'อ่อน';
        } else if (hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChars) {
            this.passwordStrength = 'แข็งแรงมาก';
        } else if ((hasUpperCase || hasLowerCase) && hasNumbers) {
            this.passwordStrength = 'ปานกลาง';
        } else {
            this.passwordStrength = 'อ่อน';
        }
    }
}