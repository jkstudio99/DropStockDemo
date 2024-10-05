import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-forgot-password',
    standalone: true,
    imports: [RouterLink, ReactiveFormsModule],
    templateUrl: './forgot-password.component.html',
    styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent implements OnInit {
    isToggled = false;
    forgotPasswordForm: FormGroup;

    constructor(
        public themeService: CustomizerSettingsService,
        private fb: FormBuilder,
        private authService: AuthService
    ) {
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }

    ngOnInit() {
        this.forgotPasswordForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]]
        });
    }

    onSubmit(): void {
        if (this.forgotPasswordForm.valid) {
            this.authService.forgotPassword(this.forgotPasswordForm.get('email')?.value).subscribe({
                next: () => {
                    // Show success message
                },
                error: (error) => {
                    console.error('Forgot password request failed', error);
                    // Handle error (e.g., show error message)
                }
            });
        }
    }
}