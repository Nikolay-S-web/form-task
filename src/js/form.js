import {
    form,
    form_Notice,
    nameField,
    nameField_getValue,
    emailField,
    emailField_getValue,
    passwordField,
    passwordField_Set,
    passwordField_getValue,
    passwordRepeatField,
    passwordRepeatField_Set,
    passwordRepeatField_getValue,
    termsCheckbox,
    form_ResetButton,
    form_SubmitButton,
} from './variables';

import { setDefaultPasswordType } from './show-button';
import { validate_nameField } from './input--name';
import { ValidatePasswordRepeat } from './input--password-repeat';
import { validatePassword } from './input--password';
import { validate_emailField } from './input--email';
import { validateTermsCheckbox } from './input--terms';
import { removeAllFormFieldsErrors, showSucces } from './register';

export function removeFieldError(field) {
    field.classList.remove('error');
}

function resetError_UnfilledFields() {
    if (!nameField_getValue()) removeFieldError(nameField);
    if (!emailField_getValue()) removeFieldError(emailField);
    if (!passwordField_getValue()) removeFieldError(passwordField_Set);
    if (!passwordRepeatField_getValue()) removeFieldError(passwordRepeatField_Set);
    removeFieldError(termsCheckbox);
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

function hideAllPasswords() {
    setDefaultPasswordType(passwordField);
    setDefaultPasswordType(passwordRepeatField);
}

form_ResetButton.addEventListener('click', () => {
    hideAllPasswords();
    removeAllFormFieldsErrors();
});

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

function formSubmitHandler(event) {
    event.preventDefault();

    if (isFormValid) {
        showSucces();
    }
}

form.addEventListener('submit', formSubmitHandler);
