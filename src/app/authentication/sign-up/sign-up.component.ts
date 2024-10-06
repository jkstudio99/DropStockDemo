import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ValidationService } from '../../services/validation.service';
import { RegisterModel } from '../../models/RegisterModel';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';
import { CommonModule } from '@angular/common';

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
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  isPasswordVisible: boolean = false;
  errorMessage: string = '';
  passwordErrors: string[] = [];
  isLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private validationService: ValidationService,
    public themeService: CustomizerSettingsService
  ) {}

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, this.validationService.passwordValidator()]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });

    this.signUpForm.get('password')?.valueChanges.subscribe(() => {
      this.validatePassword();
    });
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

  onSubmit(): void {
    if (this.signUpForm.valid) {
      this.isLoading = true;

      const registerModel: RegisterModel = {
        username: this.signUpForm.get('username')?.value,
        email: this.signUpForm.get('email')?.value,
        password: this.signUpForm.get('password')?.value
      };

      const validationResult = this.validationService.validateRegisterModel(registerModel);
      if (!validationResult.isValid) {
        this.errorMessage = validationResult.errors.join(', ');
        this.isLoading = false;
        return;
      }

      this.authService.register(registerModel).subscribe({
        next: (response) => {
          this.isLoading = false;
          if (response.status === 'Success') {
            this.router.navigate(['/dashboard']);
          } else {
            this.errorMessage = response.message;
          }
        },
        error: (error) => {
          this.isLoading = false;
          this.errorMessage = error.error.message || 'Registration failed. Please try again.';
        }
      });
    } else {
      this.validatePassword();
    }
  }

  navigateToSignIn() {
    this.router.navigate(['/authentication/sign-in']);
  }
}
