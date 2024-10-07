import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ValidationService } from '../../services/validation.service';
import { RegisterModel } from '../../models/RegisterModel';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit, OnDestroy {
  signUpForm: FormGroup;
  isPasswordVisible: boolean = false;
  isConfirmPasswordVisible: boolean = false;
  errorMessage: string = '';
  passwordErrors: string[] = [];
  isLoading: boolean = false;

  private unsubscribe$ = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private validationService: ValidationService,
    public themeService: CustomizerSettingsService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.subscribeToPasswordChanges();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private initForm(): void {
    this.signUpForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, this.validationService.passwordValidator()]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }

  private subscribeToPasswordChanges(): void {
    this.signUpForm.get('password')?.valueChanges
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(() => this.validatePassword());
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('password')?.value === g.get('confirmPassword')?.value
      ? null : { mismatch: true };
  }

  validatePassword() {
    const password = this.signUpForm.get('password')?.value;
    this.passwordErrors = this.validationService.validatePassword(password);
  }

  togglePasswordVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  toggleConfirmPasswordVisibility(): void {
    this.isConfirmPasswordVisible = !this.isConfirmPasswordVisible;
  }

  onSubmit(): void {
    if (this.signUpForm.invalid) {
      this.signUpForm.markAllAsTouched();
      this.validatePassword();
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    const registerModel: RegisterModel = {
      username: this.signUpForm.get('username')?.value,
      email: this.signUpForm.get('email')?.value,
      password: this.signUpForm.get('password')?.value
    };

    this.authService.register(registerModel)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: this.handleRegisterSuccess.bind(this),
        error: this.handleRegisterError.bind(this),
        complete: () => this.isLoading = false
      });
  }

  private handleRegisterSuccess(response: any): void {
    console.log('Registration successful', response);
    this.router.navigate(['/authentication/sign-in'])
      .then(() => console.log('Navigation to sign-in successful'))
      .catch(err => console.error('Navigation error', err));
  }

  private handleRegisterError(error: any): void {
    console.error('Registration failed', error);
    this.errorMessage = error.error?.message || 'Registration failed. Please try again.';
    this.isLoading = false;
  }

  navigateToSignIn() {
    this.router.navigate(['/authentication/sign-in']);
  }
}
