import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';
import { CommonModule } from '@angular/common'; // Import for ngClass and other common directives

@Component({
  selector: 'app-reset-password',
  standalone: true, // Standalone component
  imports: [CommonModule, ReactiveFormsModule], // Import CommonModule and ReactiveFormsModule here
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetForm: FormGroup;
  isPassword1Visible: boolean = false;
  isPassword2Visible: boolean = false;
  isPassword3Visible: boolean = false;
  password1: string = '';
  password2: string = '';
  password3: string = '';
  isLoading: boolean = false;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    public themeService: CustomizerSettingsService // For theme handling
  ) {}

  ngOnInit() {
    this.resetForm = this.fb.group({
      oldPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });

    // Retrieve token and other necessary parameters from the URL query string
    const token = this.route.snapshot.queryParams['token'];
    // If needed, you can store the token for further use
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('newPassword')?.value === g.get('confirmPassword')?.value
      ? null : { 'mismatch': true };
  }

  onPassword1Input(event: Event) {
    this.password1 = (event.target as HTMLInputElement).value;
  }

  onPassword2Input(event: Event) {
    this.password2 = (event.target as HTMLInputElement).value;
  }

  onPassword3Input(event: Event) {
    this.password3 = (event.target as HTMLInputElement).value;
  }

  togglePassword1Visibility() {
    this.isPassword1Visible = !this.isPassword1Visible;
  }

  togglePassword2Visibility() {
    this.isPassword2Visible = !this.isPassword2Visible;
  }

  togglePassword3Visibility() {
    this.isPassword3Visible = !this.isPassword3Visible;
  }

  onSubmit() {
    if (this.resetForm.valid) {
      this.isLoading = true;
      this.errorMessage = '';

      const oldPassword = this.resetForm.get('oldPassword')?.value;
      const newPassword = this.resetForm.get('newPassword')?.value;

      // Call AuthService to reset the password
      this.authService.resetPassword(oldPassword, newPassword, this.route.snapshot.queryParams['token'])
        .subscribe({
          next: () => {
            this.isLoading = false;
            this.router.navigate(['/authentication/sign-in'], { queryParams: { resetSuccess: true } });
          },
          error: (error) => {
            this.isLoading = false;
            this.errorMessage = error?.error?.message || 'Password reset failed. Please try again.';
          }
        });
    }
  }
}
