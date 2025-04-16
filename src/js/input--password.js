import {
    passwordField,
    passwordField_getValue,
    passwordField_ParentItem,
    passwordField_Set,
    passwordField_Error,
    // passwordField_Notice,
} from './variables';

import { remmoveError_passwordRepeatField, togglePasswordRepeat } from './input--password-repeat';

let isPasswordValid;

function setError_passwordField(errorMessage) {
    passwordField_Set.classList.add('error');
    passwordField_Error.innerText = errorMessage;
    passwordField_Error.style.color = 'red';
    passwordField_Error.classList.add('active');
}
function remmoveError_passwordField() {
    passwordField_Set.classList.remove('error');
    passwordField_Error.classList.remove('active');
}

function checkPasswordDifficulty(passwordField_Value) {
    const hard =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[а-я])(?=.*[А-Я])(?=.*\d)(?=.*[_@$!%*?&#^()-+]).{10,}$/;
    const difficult = /^(?=.*[a-zа-яё])(?=.*[A-ZА-ЯЁ])(?=.*\d)(?=.*[_@$!%*?&#^()-+]).{10,}$/;
    const medium = /^(?=.*[a-zа-яё])(?=.*[A-ZА-ЯЁ])(?=.*\d)(?=.*[_@$!%*?&#^()-+]).{8,}$/;
    const simple = /^(?=.*[a-zа-яё])(?=.*[A-ZА-ЯЁ])(?=.*\d).{8,}$/;

    if (hard.test(passwordField_Value)) {
        return 4;
    } else if (difficult.test(passwordField_Value)) {
        return 3;
    } else if (medium.test(passwordField_Value)) {
        return 2;
    } else if (simple.test(passwordField_Value)) {
        return 1;
    } else {
        return 0;
    }
}

function addPasswordDifficultyNotice(passwordDifficulty) {
    let noticeMessage;
    let color;
    passwordField_Error.classList.add('notice');
    switch (passwordDifficulty) {
        case 4:
            noticeMessage = 'Отличный пароль';
            color = 'green';
            break;
        case 3:
            noticeMessage = 'Надёжный пароль';
            color = 'green';
            break;
        case 2:
            noticeMessage = 'Средняя надежность пароля';
            color = 'orange';
            break;
        case 1:
            noticeMessage = 'Низкая надежность пароля';
            color = 'rgb(255, 80, 80)';
            break;
        case 0:
            noticeMessage = 'Ненадёжный пароль';
            color = 'red';
            break;
    }
    passwordField_Error.style.color = color;
    passwordField_Error.innerText = noticeMessage;
}

export function validatePassword() {
    if (passwordField_getValue() === '') {
        setError_passwordField('Пароль обязателен!');
        isPasswordValid = false;
        togglePasswordRepeat(isPasswordValid);
        return false;
    } else if (passwordField_getValue().length < 8) {
        setError_passwordField('Пароль должен быть не менее 8 символов!');
        isPasswordValid = false;
        togglePasswordRepeat(isPasswordValid);
        return false;
    }
    remmoveError_passwordField();

    const passwordField_Value = passwordField_getValue();
    const passwordDifficulty = checkPasswordDifficulty(passwordField_Value);
    addPasswordDifficultyNotice(passwordDifficulty);

    isPasswordValid = true;
    togglePasswordRepeat(isPasswordValid);

    return true;
}

passwordField.addEventListener('focus', () => {
    remmoveError_passwordField();
});

let delay;

passwordField.addEventListener('input', () => {
    remmoveError_passwordField();
    remmoveError_passwordRepeatField();
    passwordField_Error.classList.remove('notice');

    if (!passwordField_getValue() || passwordField_getValue().length < 8) {
        isPasswordValid = false;
    } else {
        isPasswordValid = true;
    }
    togglePasswordRepeat(isPasswordValid);
    function setDelay() {
        clearTimeout(delay);
        delay = setTimeout(() => {
            validatePassword();
        }, 2000);
    }
    setDelay();
});

passwordField.addEventListener('blur', validatePassword);
