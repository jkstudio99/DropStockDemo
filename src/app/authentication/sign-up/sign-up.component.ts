import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';
import { NgClass } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-sign-up',
    standalone: true,
    imports: [RouterLink, NgClass, ReactiveFormsModule],
    templateUrl: './sign-up.component.html',
    styleUrl: './sign-up.component.scss'
})
export class SignUpComponent implements OnInit {

    // isToggled
    isToggled = false;
    signUpForm: FormGroup;
    isPasswordVisible: boolean = false;
    passwordStrength: string = '';

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
        this.signUpForm = this.fb.group({
            username: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(8)]],
            confirmPassword: ['', Validators.required]
        }, { validator: this.passwordMatchValidator });
    }

    passwordMatchValidator(g: FormGroup) {
        return g.get('password')?.value === g.get('confirmPassword')?.value
            ? null : {'mismatch': true};
    }

    onSubmit(): void {
        if (this.signUpForm.valid) {
            this.authService.register(this.signUpForm.value).subscribe({
                next: () => {
                    this.router.navigate(['/authentication/sign-in']);
                },
                error: (error) => {
                    console.error('Registration failed', error);
                    // Handle registration error (e.g., show error message)
                }
            });
        }
    }

    togglePasswordVisibility(): void {
        this.isPasswordVisible = !this.isPasswordVisible;
    }

    onPasswordInput(): void {
        const password = this.signUpForm.get('password')?.value;
        this.checkPasswordStrength(password);
    }

    private checkPasswordStrength(password: string): void {
        // Implement the same logic as in SignInComponent
    }
}