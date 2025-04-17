import { remmoveError_emailField } from './input--email';
import { remmoveError_nameField } from './input--name';
import {
    checkPasswordDifficulty,
    remmoveError_passwordField,
    removePasswordDifficultyNotice,
    setPasswordDifficultyColor,
    setPasswordDifficultyMessage,
} from './input--password';
import { remmoveError_passwordRepeatField, togglePasswordRepeat } from './input--password-repeat';
import { removeError_TermsCheckbox as removeError_termsCheckbox } from './input--terms';
import { setDefaultPasswordType } from './show-button';
import {
    form,
    emailField,
    emailField_getValue,
    nameField,
    nameField_getValue,
    passwordField,
    passwordField_getValue,
    passwordRepeatField,
    success,
    success_EmailContainer,
    success_NameContainer,
    success_PasswordContainer,
    success_PasswordDifficultyContainer,
    success_ResetButton,
    success_ShowPasswordButton,
    termsCheckbox,
} from './variables';

export function removeAllFormFieldsErrors() {
    remmoveError_nameField();
    remmoveError_emailField();
    remmoveError_passwordField();
    remmoveError_passwordRepeatField();
    removeError_termsCheckbox();
    togglePasswordRepeat();
    removePasswordDifficultyNotice();
}

function registerFieldsReset() {
    nameField.value = '';
    emailField.value = '';
    passwordField.value = '';
    passwordRepeatField.value = '';
    termsCheckbox.checked = false;
}

function registerDefaultShow() {
    form.classList.add('active');
    form.classList.remove('hidden');
    success.classList.add('hidden');
    success.classList.remove('active');
}

function showFormDelayAnimator() {
    success.classList.remove('active');
    setTimeout(() => {
        success.classList.add('hidden');
        form.classList.remove('hidden');
        form.classList.add('active');
    }, 500);
}

function showSuccesDelayAnimator() {
    form.classList.remove('active');
    setTimeout(() => {
        form.classList.add('hidden');
        success.classList.remove('hidden');
        success.classList.add('active');
    }, 500);
}

function setSucceesFields() {
    success_NameContainer.textContent = nameField_getValue();
    success_EmailContainer.textContent = emailField_getValue();
    const password = passwordField_getValue();
    success_PasswordContainer.value = password;
    const passwordDifficulty = checkPasswordDifficulty(password);
    success_PasswordDifficultyContainer.textContent = setPasswordDifficultyMessage(passwordDifficulty);
    success_PasswordDifficultyContainer.style.color = setPasswordDifficultyColor(passwordDifficulty);
}

export function showSucces() {
    setSucceesFields();
    showSuccesDelayAnimator();
}

function resetAll() {}

document.addEventListener('DOMContentLoaded', () => {
    removeAllFormFieldsErrors();
    registerFieldsReset();
    registerDefaultShow();
});

function toggleShowPasswordButtonText() {
    const passwordButtonText =
        success_ShowPasswordButton.textContent == 'показать пароль' ? 'скрыть пароль' : 'показать пароль';
    success_ShowPasswordButton.textContent = passwordButtonText;
}

success_ResetButton.addEventListener('click', () => {
    registerFieldsReset();
    removeAllFormFieldsErrors();
    showFormDelayAnimator();
});

function toggleFieldType(field) {
    let type = field.getAttribute('type') == 'password' ? 'text' : 'password';
    field.setAttribute('type', type);
}

success_ShowPasswordButton.addEventListener('click', () => {
    toggleFieldType(success_PasswordContainer);
    toggleShowPasswordButtonText();
});
