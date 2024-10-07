import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';
import { CommonModule, NgClass } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ValidationService } from '../../services/validation.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-sign-in',
    standalone: true,
    imports: [RouterLink, NgClass, ReactiveFormsModule, CommonModule],
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit, OnDestroy {
    signInForm: FormGroup;
    isPasswordVisible = false;
    errorMessage = '';
    passwordErrors: string[] = [];
    isLoading = false;

    private unsubscribe$ = new Subject<void>();

    constructor(
        public themeService: CustomizerSettingsService,
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router,
        private validationService: ValidationService
    ) {}

    ngOnInit(): void {
        this.initForm();
        this.subscribeToThemeChanges();
        this.subscribeToPasswordChanges();
    }

    ngOnDestroy(): void {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }

    onSubmit(): void {
        if (this.signInForm.invalid) {
            this.signInForm.markAllAsTouched();
            this.validatePassword();
            return;
        }

        this.isLoading = true;
        this.errorMessage = '';
        const { username, password } = this.signInForm.value;

        this.authService.login({ username, password })
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe({
                next: this.handleLoginSuccess.bind(this),
                error: this.handleLoginError.bind(this),
                complete: () => this.isLoading = false
            });
    }

    togglePasswordVisibility(): void {
        this.isPasswordVisible = !this.isPasswordVisible;
    }

    navigateToSignUp(): void {
        this.router.navigate(['/authentication/sign-up']);
    }

    private initForm(): void {
        this.signInForm = this.fb.group({
            username: ['', [Validators.required, Validators.minLength(3)]],
            password: ['', [Validators.required, this.validationService.passwordValidator()]]
        });
    }

    private subscribeToThemeChanges(): void {
        this.themeService.isToggled$
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe(isToggled => {
                // Handle theme toggle if needed
            });
    }

    private subscribeToPasswordChanges(): void {
        this.signInForm.get('password')?.valueChanges
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe(() => this.validatePassword());
    }

    private validatePassword(): void {
        const password = this.signInForm.get('password')?.value;
        this.passwordErrors = this.validationService.validatePassword(password);
    }

    private handleLoginSuccess(response: any): void {
        console.log('Login successful', response);
        this.router.navigate(['/dashboard'])
            .then(() => console.log('Navigation to dashboard successful'))
            .catch(err => console.error('Navigation error', err));
    }

    private handleLoginError(error: any): void {
        console.error('Login failed', error);
        this.errorMessage = 'Invalid username or password. Please try again.';
        this.isLoading = false;
    }
}
