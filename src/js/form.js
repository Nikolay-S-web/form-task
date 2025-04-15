import {
    nameField,
    emailField,
    password_Sets,
    passwordField,
    passwordRepeatField,
    form_SubmitButton,
    form_Notice,
    passwordRepeatField_ParentItem,
} from './variables';

import { validate_nameField } from './input--name';
import { disablePasswordRepeat } from './input--password-repeat';

const terms = document.getElementById('terms');

export function resetFieldsError(field) {
    if (field) {
        field.classList.remove('error');
        return;
    }
    nameField.classList.remove('error');
    emailField.classList.remove('active');
    password_Sets.forEach((passwordSet) => {
        passwordSet.classList.remove('error');
    });

    form_Notice.classList.remove('active');
}

function validateForm(event) {
    event.preventDefault();

    if (validate_nameField()) {
        form_SubmitButton.classList.add('is_valid');
    }
}

form.addEventListener('submit', validateForm);

document.addEventListener('DOMContentLoaded', () => {
    resetFieldsError();
    disablePasswordRepeat();
});
