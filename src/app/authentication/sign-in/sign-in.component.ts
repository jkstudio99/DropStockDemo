import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';
import { CommonModule, NgClass } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ValidationService } from '../../services/validation.service';

@Component({
    selector: 'app-sign-in',
    standalone: true,
    imports: [RouterLink, NgClass, ReactiveFormsModule, CommonModule],
    templateUrl: './sign-in.component.html',
    styleUrl: './sign-in.component.scss'
})
export class SignInComponent implements OnInit {

    isToggled = false;
    signInForm: FormGroup;
    isPasswordVisible: boolean = false;
    errorMessage: string = '';
    passwordErrors: string[] = [];
    passwordsDoNotMatch: boolean = false;

    constructor(
        public themeService: CustomizerSettingsService,
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router,
        private validationService: ValidationService
    ) {
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }

    ngOnInit() {
        this.signInForm = this.fb.group({
            username: ['', Validators.required],
            password: ['', [Validators.required, this.validationService.passwordValidator()]],
            confirmPassword: ['', Validators.required]
        });

        this.signInForm.get('password')?.valueChanges.subscribe(() => {
            this.validatePassword();
            this.checkPasswordsMatch();
        });

        this.signInForm.get('confirmPassword')?.valueChanges.subscribe(() => {
            this.checkPasswordsMatch();
        });
    }

    validatePassword() {
        const password = this.signInForm.get('password')?.value;
        this.passwordErrors = this.validationService.validatePassword(password);
    }

    checkPasswordsMatch() {
        const password = this.signInForm.get('password')?.value;
        const confirmPassword = this.signInForm.get('confirmPassword')?.value;
        this.passwordsDoNotMatch = password !== confirmPassword;
    }

    onSubmit(): void {
        if (this.signInForm.valid) {
            const loginModel = {
                username: this.signInForm.get('username')?.value,
                password: this.signInForm.get('password')?.value
            };
            this.authService.login(loginModel).subscribe({
                next: (response) => {
                    console.log('Login successful', response);
                    localStorage.setItem('token', response.token);
                    localStorage.setItem('userData', JSON.stringify(response.userData));
                    this.router.navigate(['/dashboard']).then(() => {
                        console.log('Navigation to dashboard attempted');
                    }).catch(err => {
                        console.error('Navigation error', err);
                    });
                },
                error: (error) => {
                    console.error('Login failed', error);
                    this.errorMessage = error.error?.message || 'Invalid username or password';
                }
            });
        } else {
            console.log('Form is invalid');
            this.validatePassword();
        }
    }

    togglePasswordVisibility(): void {
        this.isPasswordVisible = !this.isPasswordVisible;
    }

    navigateToSignUp() {
        this.router.navigate(['/authentication/sign-up']);
    }
}