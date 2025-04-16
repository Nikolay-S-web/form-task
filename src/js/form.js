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
    emailField_getValue,
    passwordRepeatField_getValue,
    termsCheckbox_checkOn,
    passwordField_Set,
    passwordRepeatField_Set,
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

function resetError_UnfilledFields() {
    if (!nameField_getValue()) resetFieldsError(nameField);
    if (!emailField_getValue()) resetFieldsError(emailField);
    if (!passwordField_getValue()) resetFieldsError(passwordField_Set);
    if (!passwordRepeatField_getValue()) resetFieldsError(passwordRepeatField_Set);
}

function showNotice_form() {
    form_Notice.classList.add('active');
}

function hideNotice_form() {
    form_Notice.classList.remove('active');
}

function validateForm() {
    const isNameValid = validate_nameField();
    const isEmailValid = validate_emailField();
    const isPasswordValid = validatePassword();
    const isPasswordRepeatValid = ValidatePasswordRepeat();
    const isTermsChecked = validateTermsCheckbox();

    if (isNameValid & isEmailValid & isPasswordValid & isPasswordRepeatValid & isTermsChecked) {
        form_SubmitButton.classList.add('is_valid');
        return true;
    } else {
        form_SubmitButton.classList.remove('is_valid');
        return false;
    }
}

let isFormValid;

form_SubmitButton.addEventListener('mouseover', () => {
    isFormValid = validateForm();
    if (!isFormValid) showNotice_form();
});

form_SubmitButton.addEventListener('mouseleave', () => {
    if (!isFormValid) {
        resetError_UnfilledFields();
        hideNotice_form();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    resetFieldsError();
    togglePasswordRepeat();
});

form.addEventListener('submit', (event) => event.preventDefault());
