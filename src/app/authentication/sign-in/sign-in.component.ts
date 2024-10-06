import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';
import { CommonModule, NgClass } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

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

    constructor(
        public themeService: CustomizerSettingsService,
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router
    ) {
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }

    ngOnInit() {
        this.signInForm = this.fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    onSubmit(): void {
        if (this.signInForm.valid) {
            const loginModel = {
                username: this.signInForm.get('username')?.value,
                password: this.signInForm.get('password')?.value
            };
            this.authService.login(loginModel).subscribe({
                next: (response) => {
                    // Store the token and user data
                    localStorage.setItem('token', response.token);
                    // You might want to store user information as well
                    this.router.navigate(['/dashboard']);
                },
                error: (error) => {
                    console.error('Login failed', error);
                    this.errorMessage = error.error.message || 'Invalid username or password';
                }
            });
        }
    }

    togglePasswordVisibility(): void {
        this.isPasswordVisible = !this.isPasswordVisible;
    }

    navigateToSignUp() {
        this.router.navigate(['/authentication/sign-up']);
    }
}