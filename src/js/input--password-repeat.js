import { resetFieldsError } from './form';

import {
    passwordField,
    passwordField_Value,
    passwordRepeatField,
    passwordRepeatField_Value,
    passwordRepeatField_Set,
    passwordRepeatField_Error,
    passwordRepeatField_ParentItem,
} from './variables';

export let isPasswordRepeatDisabled;

export function disablePasswordRepeat(isValid) {
    if (isValid) {
        passwordRepeatField.removeAttribute('disabled');
        passwordRepeatField_ParentItem.classList.remove('disabled');
        isPasswordRepeatDisabled = false;
        return;
    }
    passwordRepeatField.setAttribute('disabled', '');
    passwordRepeatField_ParentItem.classList.add('disabled');
    passwordRepeatField_ParentItem.classList.remove('error');
    isPasswordRepeatDisabled = true;
}

let delay;

export function ValidatePasswordRepeat() {
    if (passwordRepeatField_Value !== passwordField_Value) {
        passwordRepeatField_Error.innerText = 'Пароли не совпадают!';
        passwordRepeatField_Error.classList.add('active');
        passwordRepeatField_Set.classList.add('error');
        return false;
    }
    passwordRepeatField_Error.classList.remove('active');
    passwordRepeatField_Set.classList.remove('error');
    return true;
}

passwordRepeatField.addEventListener('input', () => {
    passwordRepeatField_Error.classList.remove('active');
    passwordRepeatField.closest('.form-password-set').classList.remove('error');

    function setDelay() {
        clearTimeout(delay);
        delay = setTimeout(() => {
            ValidatePasswordRepeat();
        }, 2000);
    }
    setDelay();
});

passwordRepeatField.addEventListener('blur', () => {
    ValidatePasswordRepeat();
});
