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

function setError_passwordRepeatField(errorMessage) {
    passwordRepeatField_Set.classList.add('error');
    passwordRepeatField_Error.innerText = errorMessage;
    passwordRepeatField_Error.classList.add('active');
}
export function remmoveError_passwordRepeatField() {
    passwordRepeatField_Error.classList.remove('active');
    passwordRepeatField_Set.classList.remove('error');
}

export function disablePasswordRepeat() {
    passwordRepeatField.setAttribute('disabled', '');
    passwordRepeatField_Set.classList.add('disabled');
    passwordRepeatField_Set.classList.remove('error');
    passwordRepeatField_Error.classList.remove('active');
    passwordRepeatField.placeholder = 'Сначала введите пароль';
    passwordRepeatField.value = '';
}

function activatePasswordRepeat() {
    passwordRepeatField.removeAttribute('disabled');
    passwordRepeatField_Set.classList.remove('disabled');
    passwordRepeatField.placeholder = 'Повторите пароль';
}

export function togglePasswordRepeat(isValid = false) {
    if (isValid) {
        activatePasswordRepeat();
        return;
    }
    disablePasswordRepeat();
}

let delay;

export function ValidatePasswordRepeat() {
    if (passwordRepeatField_getValue() !== passwordField_getValue()) {
        setError_passwordRepeatField('Пароли не совпадают!');
        return false;
    }
    remmoveError_passwordRepeatField();
    return true;
}

passwordRepeatField.addEventListener('focus', () => {
    remmoveError_passwordRepeatField();
});

passwordRepeatField.addEventListener('input', () => {
    remmoveError_passwordRepeatField();

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
