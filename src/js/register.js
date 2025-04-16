import { emailField, form, nameField, passwordField, success } from './variables';

function registerReset() {
    nameField.value = '';
    emailField.value = '';
    passwordField.value = '';
    form.classList.add('active');
    success.classList.remove('active');
}
