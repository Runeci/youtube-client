import { AbstractControl, ValidationErrors } from '@angular/forms';

export function PasswordStrengthValidator(control: AbstractControl): ValidationErrors | null {
    const value: string = control.value || '';
    let errorMessage: string = 'Your password isn\'t strong enough: \n';

    if (!value) {
        return null;
    }

    const upperCaseCharacters = /[A-Z]/;
    const lowerCaseCharacters = /[a-z]/;
    const numberCharacters = /\d/;
    const specialCharacters = /[#?!@$%^&*-]/;

    if (value.length < 8) {
        errorMessage += '- at least 8 characters \n';
    }
    if (!lowerCaseCharacters.test(value) || !upperCaseCharacters.test(value)) {
        errorMessage += '- a mixture of both uppercase and lowercase letters \n';
    }
    if (!numberCharacters.test(value)) {
        errorMessage += '- a mixture of letters and numbers \n';
    }
    if (!specialCharacters.test(value)) {
        errorMessage += '- inclusion of at least one special character, e.g., ! @ # ? ] \n';
    }
    return value.length < 8
    || !lowerCaseCharacters.test(value)
    || !upperCaseCharacters.test(value)
    || !numberCharacters.test(value)
    || !specialCharacters.test(value)
        ? {
            passwordStrength: `${errorMessage}`,
        } : null;
}
