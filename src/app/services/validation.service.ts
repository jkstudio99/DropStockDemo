import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn, Validators } from '@angular/forms';
import { RegisterModel } from '../models/RegisterModel'; // Adjust the path as necessary

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  usernameValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
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
    return (control: AbstractControl): {[key: string]: any} | null => {
      const value = control.value;
      if (value.length < 6) {
        return { 'minlength': { requiredLength: 6, actualLength: value.length } };
      }
      return null;
    };
  }

  validateRegisterModel(model: RegisterModel): { isValid: boolean; errors?: string[] } {
    // Implement validation logic here
    return { isValid: true }; // Example return
  }
}
