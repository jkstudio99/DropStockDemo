import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordStrengthService {
  checkStrength(password: string): { strength: string, feedback: string } {
    let score = 0;
    let feedback = [];

    if (password.length >= 8) score += 1;
    if (password.length >= 12) score += 1;
    if (/[A-Z]/.test(password)) score += 1;
    if (/[a-z]/.test(password)) score += 1;
    if (/\d/.test(password)) score += 1;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) score += 1;

    if (password.length < 8) {
      feedback.push('ควรมีความยาวอย่างน้อย 8 ตัวอักษร');
    }
    if (!/[A-Z]/.test(password)) {
      feedback.push('ควรมีตัวพิมพ์ใหญ่อย่างน้อย 1 ตัว');
    }
    if (!/[a-z]/.test(password)) {
      feedback.push('ควรมีตัวพิมพ์เล็กอย่างน้อย 1 ตัว');
    }
    if (!/\d/.test(password)) {
      feedback.push('ควรมีตัวเลขอย่างน้อย 1 ตัว');
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      feedback.push('ควรมีอักขระพิเศษอย่างน้อย 1 ตัว');
    }

    let strength;
    switch (score) {
      case 0:
      case 1:
        strength = 'อ่อนมาก';
        break;
      case 2:
        strength = 'อ่อน';
        break;
      case 3:
        strength = 'ปานกลาง';
        break;
      case 4:
        strength = 'แข็งแรง';
        break;
      case 5:
      case 6:
        strength = 'แข็งแรงมาก';
        break;
    }

    return { strength, feedback: feedback.join(', ') || '' };
  }
}
