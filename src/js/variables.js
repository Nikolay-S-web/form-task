// form
export const form = document.getElementById('form');
export const form_SubmitButton = document.getElementById('submit-button');
export const form_Notice = document.querySelector('.form__notice');

// Поле ввода name
export const nameField = document.getElementById('name');
export const nameField_getValue = () => nameField.value;
export const nameField_ParentItem = nameField.closest('.form-item');
export const nameField_Error = nameField_ParentItem.querySelector('.form-item__error');

export const nameField_Regex = /^[a-zA-Zа-яА-Я0-9]+$/;

// Поле ввода email
export const emailField = document.getElementById('email');
export const emailField_getValue = () => emailField.value.trim();
export const emailField_ParentItem = emailField.closest('.form-item');
export const emailField_Error = emailField_ParentItem.querySelector('.form-item__error');

// Поле ввода password
export const passwordField = document.getElementById('password');
export const passwordField_getValue = () => passwordField.value;
export const passwordField_ParentItem = passwordField.closest('.form-item');
export const passwordField_Set = passwordField.closest('.form-password-set');
export const passwordField_Error = passwordField_ParentItem.querySelector('.form-item__error');

// export const passwordField_Notice = passwordField_ParentItem.querySelector('.notice');

// Поле поверждения password-repeat
export const passwordRepeatField = document.getElementById('password-repeat');
export const passwordRepeatField_getValue = () => passwordRepeatField.value;
export const passwordRepeatField_ParentItem = passwordRepeatField.closest('.form-item');
export const passwordRepeatField_Set = passwordRepeatField.closest('.form-password-set');
export const passwordRepeatField_Error =
    passwordRepeatField_ParentItem.querySelector('.form-item__error');

// Поле checkbox согласия с условиями
export const termsCheckbox = document.getElementById('terms');
export const termsCheckbox_checkValue = () => termsCheckbox.checked;
export const termsCheckbox_ParentItem = termsCheckbox.closest('.form-item');
export const termsCheckbox_Error = termsCheckbox.querySelector('.form-item__error');

// Сеты полей password и button-show
export const password_Sets = document.querySelectorAll('.form-password-set');

// Кнопки показа пароля
export const password_ShowButtons = document.querySelectorAll('.form-password-set__button');
