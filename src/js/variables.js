// form
export const form = document.getElementById('form');
export const form_SubmitButton = document.getElementById('submit-button');
export const form_Notice = document.querySelector('.form__notice');

// Поле ввода name
export const nameField = document.getElementById('name');
export const nameField_Value = nameField.value;
export const nameField_ParentItem = nameField.closest('.form-item');
export const nameField_Error = nameField_ParentItem.querySelector('.form-item__error');

export const nameField_Regex = /^[a-zA-Z0-9а-яА-Я]+$/;

// Поле ввода email
export const emailField = document.getElementById('email');
export const emailField_Value = emailField.value.trim();
export const emailField_ParentItem = emailField.closest('.form-item');
export const emailField_Error = emailField_ParentItem.querySelector('.form-item__error');

// Поле ввода password
export const passwordField = document.getElementById('password');
export const passwordField_Value = passwordField.value;
export const passwordField_ParentItem = passwordField.closest('.form-item');
export const passwordField_Set = passwordField.closest('.form-password-set');
export const passwordField_Error = passwordField_ParentItem.querySelector('.form-item__error');

// Поле поверждения password-repeat
export const passwordRepeatField = document.getElementById('password-repeat');
export const passwordRepeatField_Value = passwordRepeatField.value;
export const passwordRepeatField_ParentItem = passwordRepeatField.closest('.form-item');
export const passwordRepeatField_Set = passwordRepeatField.closest('.form-password-set');
export const passwordRepeatField_Error =
    passwordRepeatField_ParentItem.querySelector('.form-item__error');

export const password_Sets = document.querySelectorAll('.form-password-set');
export const password_ShowButtons = document.querySelectorAll('.form-password-set__button');
