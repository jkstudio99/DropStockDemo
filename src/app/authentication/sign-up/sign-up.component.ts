import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';
import { CommonModule, NgClass } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { PasswordStrengthService } from '../../services/password.strength.service';
import { ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-sign-up',
    standalone: true,
    imports: [RouterLink, NgClass, ReactiveFormsModule, CommonModule],
    templateUrl: './sign-up.component.html',
    styleUrl: './sign-up.component.scss'
})
export class SignUpComponent implements OnInit {

    // isToggled
    isToggled = false;
    signUpForm: FormGroup;
    isPasswordVisible: boolean = false;
    passwordStrength: string = '';
    passwordFeedback: string[] = [];

    constructor(
        public themeService: CustomizerSettingsService,
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router,
        private route: ActivatedRoute,
        private passwordStrengthService: PasswordStrengthService,
        private cdr: ChangeDetectorRef
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
        if (password) {
            const result = this.passwordStrengthService.checkStrength(password);
            this.passwordStrength = result.strength;
            this.passwordFeedback = result.feedback;
        } else {
            this.passwordStrength = '';
            this.passwordFeedback = [];
        }
        this.cdr.detectChanges();
    }

    navigateToSignIn() {
        this.router.navigate(['/authentication/sign-in']).then(
            (navigationSuccess) => {
                if (navigationSuccess) {
                    console.log('Navigation successful');
                } else {
                    console.log('Navigation failed');
                }
            },
            (error) => {
                console.log('Navigation error:', error);
            }
        );
    }
    
}
