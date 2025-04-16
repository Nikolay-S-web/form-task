import {
    nameField,
    emailField,
    password_Sets,
    passwordField,
    passwordRepeatField,
    form,
    form_SubmitButton,
    form_Notice,
    passwordRepeatField_ParentItem,
    nameField_getValue,
    passwordField_getValue,
} from './variables';

import { validate_nameField } from './input--name';
import { togglePasswordRepeat, ValidatePasswordRepeat } from './input--password-repeat';
import { validatePassword } from './input--password';
import { validate_emailField } from './input--email';
import { validateTermsCheckbox } from './input--terms';

export function resetFieldsError(field = null) {
    if (field) {
        field.classList.remove('error');
        return;
    }
    nameField.classList.remove('error');
    emailField.classList.remove('error');
    password_Sets.forEach((passwordSet) => {
        passwordSet.classList.remove('error');
    });

    form_Notice.classList.remove('active');
}

let isNameValid;
let isEmailValid;
let isPasswordValid;
let isPasswordRepeatValid;
let isTermsChecked;

function validateForm() {
    isNameValid = validate_nameField();
    isEmailValid = validate_emailField();
    isPasswordValid = validatePassword();
    isPasswordRepeatValid = ValidatePasswordRepeat();
    isTermsChecked = validateTermsCheckbox();

    if (isNameValid & isEmailValid & isPasswordValid & isPasswordRepeatValid & isTermsChecked) {
        form_SubmitButton.classList.add('is_valid');
        return false;
    } else {
        form_SubmitButton.classList.remove('is_valid');
        return true;
    }
}

let isFormValid;

form_SubmitButton.addEventListener('mouseover', () => {
    isFormValid = validateForm();
});

form_SubmitButton.addEventListener('mouseleave', () => {
    if (isFormValid) {
        resetFieldsError();
        return;
    }
});

document.addEventListener('DOMContentLoaded', () => {
    resetFieldsError();
    togglePasswordRepeat();
});

form.addEventListener('submit', (event) => event.preventDefault());
