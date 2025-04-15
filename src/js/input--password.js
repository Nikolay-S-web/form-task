import {
    passwordField,
    passwordField_getValue,
    passwordField_Set,
    passwordField_Error,
    passwordField_ParentItem,
} from './variables';

import { resetFieldsError } from './form';

import { disablePasswordRepeat } from './input--password-repeat';

export let isPasswordValid;

export function validatePassword() {
    if (passwordField_getValue() === '') {
        passwordField_Error.innerText = 'Пароль обязателен!';
        passwordField_Error.classList.add('active');
        passwordField_Set.classList.add('error');
        isPasswordValid = false;
        disablePasswordRepeat(isPasswordValid);
        return false;
    }
    if (passwordField_getValue().length < 8) {
        passwordField_Error.innerText = 'Пароль должен быть не менее 8 символов!';
        passwordField_Error.classList.add('active');
        passwordField_Set.classList.add('error');
        isPasswordValid = false;
        disablePasswordRepeat(isPasswordValid);
        return false;
    }
    passwordField_Error.classList.remove('active');
    passwordField_Set.classList.remove('error');
    isPasswordValid = true;
    disablePasswordRepeat(isPasswordValid);

    return true;
}

passwordField.addEventListener('focus', () => {
    resetFieldsError(passwordField);
});

let delay;

passwordField.addEventListener('input', () => {
    passwordField_Set.classList.remove('error');

    // if (!isPasswordRepeatDisabled) {
    //     passwordRepeatValidation();
    // }
    if (!passwordField_getValue() || passwordField_getValue().length < 8) {
        isPasswordValid = false;
    } else {
        isPasswordValid = true;
    }
    disablePasswordRepeat(isPasswordValid);
    function setDelay() {
        clearTimeout(delay);
        delay = setTimeout(() => {
            validatePassword();
        }, 2000);
    }
    setDelay();
});

passwordField.addEventListener('blur', validatePassword);
