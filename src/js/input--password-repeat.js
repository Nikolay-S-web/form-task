import { resetFieldsError } from './form';

import {
    passwordField,
    passwordField_getValue,
    passwordRepeatField,
    passwordRepeatField_getValue,
    passwordRepeatField_Set,
    passwordRepeatField_Error,
    passwordRepeatField_ParentItem,
} from './variables';

export let isPasswordRepeatDisabled;

export function disablePasswordRepeat(isValid) {
    if (isValid) {
        passwordRepeatField.removeAttribute('disabled');
        passwordRepeatField_Set.classList.remove('disabled');
        isPasswordRepeatDisabled = false;
        return;
    }
    passwordRepeatField.setAttribute('disabled', '');
    passwordRepeatField_Set.classList.add('disabled');
    passwordRepeatField_Set.classList.remove('error');
    isPasswordRepeatDisabled = true;
}

let delay;

export function ValidatePasswordRepeat() {
    if (passwordRepeatField_getValue() !== passwordField_getValue()) {
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
    passwordRepeatField_Set.classList.remove('error');

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
