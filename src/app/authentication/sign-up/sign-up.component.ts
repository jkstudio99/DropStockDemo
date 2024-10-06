import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';
import { CommonModule, NgClass } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { ValidationService } from '../../services/validation.service';
import { RegisterModel } from '../../models/RegisterModel';

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
    errorMessage: string = '';
    isLoading: boolean = false;

    constructor(
        public themeService: CustomizerSettingsService,
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router,
        private route: ActivatedRoute,
        private validationService: ValidationService, // {{ edit_1 }}: Keep this if you need validation
        private cdr: ChangeDetectorRef
    ) {
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }

    ngOnInit() {
        this.signUpForm = this.fb.group({
            username: ['', [Validators.required, this.validationService.usernameValidator()]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, this.validationService.passwordValidator()]],
            confirmPassword: ['', Validators.required]
        }, { validator: this.passwordMatchValidator });
    }

    passwordMatchValidator(g: FormGroup) {
        return g.get('password')?.value === g.get('confirmPassword')?.value
            ? null : {'mismatch': true};
    }

    onSubmit(): void {
        if (this.signUpForm.valid) {
            this.isLoading = true;
            const registerModel: RegisterModel = {
                username: this.signUpForm.get('username')?.value,
                email: this.signUpForm.get('email')?.value,
                password: this.signUpForm.get('password')?.value
            };
            if (this.validateRegisterModel(registerModel)) {
                this.authService.register(registerModel).subscribe({
                    next: (response) => {
                        this.isLoading = false;
                        if (response.status === 'Success') {
                            this.router.navigate(['/authentication/sign-in']);
                        } else {
                            this.errorMessage = response.message;
                        }
                    },
                    error: (error) => {
                        this.isLoading = false;
                        console.error('Registration failed', error);
                        this.errorMessage = error.error.message || 'Registration failed. Please try again.';
                    }
                });
            } else {
                this.errorMessage = 'Invalid registration data';
            }
        }
    }

    togglePasswordVisibility(): void {
        this.isPasswordVisible = !this.isPasswordVisible;
    }

    onPasswordInput(): void {
        const password = this.signUpForm.get('password')?.value;
        if (password) {
            const strength = this.checkPasswordStrength(password);
            this.passwordStrength = strength.strength;
            this.passwordFeedback = strength.feedback;
        } else {
            this.passwordStrength = '';
            this.passwordFeedback = [];
        }
        this.cdr.detectChanges();
    }

    private checkPasswordStrength(password: string): { strength: string, feedback: string[] } {
        const feedback: string[] = [];
        let strength = 'Weak';

        if (password.length < 8) {
            feedback.push('Password should be at least 8 characters long.');
        }
        if (!/[A-Z]/.test(password)) {
            feedback.push('Include at least one uppercase letter.');
        }
        if (!/[a-z]/.test(password)) {
            feedback.push('Include at least one lowercase letter.');
        }
        if (!/[0-9]/.test(password)) {
            feedback.push('Include at least one number.');
        }
        if (!/[!@#$%^&*]/.test(password)) {
            feedback.push('Include at least one special character (!@#$%^&*).');
        }

        if (feedback.length === 0) {
            strength = 'Strong';
        } else if (feedback.length <= 2) {
            strength = 'Medium';
        }

        return { strength, feedback };
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
    
    // {{ edit_2 }}: Example method to validate the RegisterModel
    validateRegisterModel(model: RegisterModel): boolean {
        const validationResult = this.validationService.validateRegisterModel(model); // Ensure this method exists
        if (!validationResult.isValid) {
            return false; // Return false if validation fails
        }
        return true; // Return true if validation passes
    }
}
