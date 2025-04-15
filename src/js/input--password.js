import {
    passwordField,
    passwordField_getValue,
    passwordField_Set,
    passwordField_Error,
} from './variables';

import { resetFieldsError } from './form';

import { disablePasswordRepeat } from './input--password-repeat';

let isPasswordValid;

function setError_passwordField(errorMessage) {
    passwordField_Set.classList.add('error');
    passwordField_Error.innerText = errorMessage;
    passwordField_Error.classList.add('active');
}
function remmoveError_passwordField() {
    passwordField_Set.classList.remove('error');
    passwordField_Error.classList.remove('active');
}

function checkPasswordDifficulty() {
    const hard = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[а-я])(?=.*[А-Я])(?=.*d)(?=.*[@$!%*?&]).{10,}$/;
    const difficult = /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&]).{10,}$/;
    const medium = /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&]).{8,}$/;
    const simple = /^(?=.*[a-z])(?=.*[A-Z])(?=.*d).{8,}$/;

    if (hard.test(passwordField_getValue)) return 4;
    else if (difficult.test(passwordField_getValue)) return 3;
    else if (medium.test(passwordField_getValue)) return 2;
    else if (simple.test(passwordField_getValue)) return 1;
    return 0;
}

function addPasswordDifficultyNotice(passwordDifficulty) {
    let noticeMessage;
    passwordField_Error.classList.add('notice');
    switch (passwordDifficulty) {
        case 4:
            noticeMessage = 'Отличный пароль';
            passwordField_Error.style.color = 'green';
            break;
        case 3:
            noticeMessage = 'Надёжный пароль';
            passwordField_Error.style.color = 'green';
            break;
        case 2:
            noticeMessage = 'Средняя надежность пароля';
            passwordField_Error.style.color = 'orange';
            break;
        case 1:
            noticeMessage = 'Низкая надежность пароля';
            passwordField_Error.style.color = 'yellow';
            break;
        case 0:
            noticeMessage = 'Ненадёжный пароль';
            passwordField_Error.style.color = 'red';
            break;
    }
    passwordField_Error.innerText = noticeMessage;
}

function remmoveNotice_passwordField() {
    passwordField_Error.classList.remove('notice');
}

export function validatePassword() {
    if (passwordField_getValue() === '') {
        setError_passwordField('Пароль обязателен!');
        isPasswordValid = false;
        disablePasswordRepeat(isPasswordValid);
        return false;
    } else if (passwordField_getValue().length < 8) {
        setError_passwordField('Пароль должен быть не менее 8 символов!');
        isPasswordValid = false;
        disablePasswordRepeat(isPasswordValid);
        return false;
    }

    let passwordDifficulty = checkPasswordDifficulty();
    addPasswordDifficultyNotice(passwordDifficulty);

    remmoveError_passwordField();
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
