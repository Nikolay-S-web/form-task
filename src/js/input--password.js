import {
    passwordField,
    passwordField_getValue,
    passwordField_ParentItem,
    passwordField_Set,
    passwordField_Error,
    // passwordField_Notice,
} from './variables';

import { remmoveError_passwordRepeatField, togglePasswordRepeat } from './input--password-repeat';
import { setDefaultPasswordType } from './show-button';

let isPasswordValid;

function setError_passwordField(errorMessage) {
    passwordField_Set.classList.add('error');
    passwordField_Error.innerText = errorMessage;
    passwordField_Error.style.color = 'red';
    passwordField_Error.classList.add('active');
}

export function remmoveError_passwordField() {
    passwordField_Set.classList.remove('error');
    passwordField_Error.classList.remove('active');
}

export function checkPasswordDifficulty(passwordField_Value) {
    const hard = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[а-я])(?=.*[А-Я])(?=.*\d)(?=.*[_@$!%*?&#^()-+]).{10,}$/;
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

export function setPasswordDifficultyMessage(passwordDifficulty) {
    let message;
    switch (passwordDifficulty) {
        case 4:
            message = 'Отличный пароль';
            break;
        case 3:
            message = 'Надёжный пароль';
            break;
        case 2:
            message = 'Средняя надежность пароля';
            break;
        case 1:
            message = 'Низкая надежность пароля';
            break;
        case 0:
            message = 'Ненадёжный пароль';
            break;
    }
    return message;
}

export function setPasswordDifficultyColor(passwordDifficulty) {
    let color;
    switch (passwordDifficulty) {
        case 4:
            color = 'green';
            break;
        case 3:
            color = 'green';
            break;
        case 2:
            color = 'orange';
            break;
        case 1:
            color = 'rgb(255, 80, 80)';
            break;
        case 0:
            color = 'rgb(220 48 48)';
            break;
    }
    return color;
}

function addPasswordDifficultyNotice(passwordDifficulty) {
    passwordField_Error.classList.add('notice');
    let noticeMessage = setPasswordDifficultyMessage(passwordDifficulty);
    let color = setPasswordDifficultyColor(passwordDifficulty);
    passwordField_Error.style.color = color;
    console.log('one');
    passwordField_Error.innerText = noticeMessage;
}

export function removePasswordDifficultyNotice() {
    passwordField_Error.classList.remove('notice');
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

passwordField.addEventListener('blur', () => {
    setDefaultPasswordType(passwordField);
    validatePassword();
});
