import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';
import { RegisterModel } from '../models/RegisterModel';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  usernameValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const value = control.value;
      if (value.length < 3) {
        return { 'minlength': { requiredLength: 3, actualLength: value.length } };
      }
      if (value.length > 50) {
        return { 'maxlength': { requiredLength: 50, actualLength: value.length } };
      }
      return null;
    };
  }

  passwordValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const value = control.value;
      if (!value) {
        return null;
      }
      return this.validatePassword(value).length === 0 ? null : { 'invalidPassword': true };
    };
  }

  validatePassword(password: string): string[] {
    const errors: string[] = [];
    if (password.length < 8) {
      errors.push('Password must be at least 8 characters long');
    }
    if (!/[A-Z]/.test(password)) {
      errors.push('Password must contain at least one uppercase letter');
    }
    if (!/[a-z]/.test(password)) {
      errors.push('Password must contain at least one lowercase letter');
    }
    if (!/[0-9]/.test(password)) {
      errors.push('Password must contain at least one number');
    }
    if (!/[!@#$%^&*]/.test(password)) {
      errors.push('Password must contain at least one special character (!@#$%^&*)');
    }
    return errors;
  }

  /**
   * This method validates the entire RegisterModel. 
   * It checks the username, email, password, and confirm password fields.
   */
  validateRegisterModel(model: RegisterModel): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];

    // Validate username
    if (!model.username || model.username.length < 3) {
      errors.push('Username must be at least 3 characters long.');
    } else if (model.username.length > 50) {
      errors.push('Username cannot exceed 50 characters.');
    }

    // Validate email
    const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (!model.email || !emailPattern.test(model.email)) {
      errors.push('A valid email is required.');
    }

    // Validate password
    const passwordErrors = this.validatePassword(model.password);
    if (passwordErrors.length > 0) {
      errors.push(...passwordErrors);
    }

    return {
      isValid: errors.length === 0,
      errors: errors
    };
  }
}
