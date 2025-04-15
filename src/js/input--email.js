import { resetFieldsError } from './form';

import {
    emailField,
    emailField_getValue,
    emailField_ParentItem,
    emailField_Error,
} from './variables';

export function validateEmail() {
    if (!emailField_getValue()) {
        emailField.classList.add('error');
        emailField_Error.innerText = 'Email обязателен!';
        emailField_Error.classList.add('active');
        return false;
    } else if (emailField_getValue().length < 4) {
        emailField.classList.add('error');

        emailField_Error.innerText = 'Введен некоректный email!';
        emailField_Error.classList.add('active');
        return false;
    }

    const atIndex = emailField_getValue().indexOf('@');
    const dotIndex = emailField_getValue().lastIndexOf('.');

    if (atIndex <= 0 || dotIndex < atIndex + 2 || dotIndex === emailField_getValue().length - 1) {
        emailField.classList.add('error');
        emailField_Error.innerText = 'Введен некоректный email!';
        emailField_Error.classList.add('active');

        return false;
    }

    emailField.classList.remove('error');
    emailField_Error.classList.remove('active');
    return true;
}

emailField.addEventListener('focus', () => {
    resetFieldsError(emailField);
});

emailField.addEventListener('blur', validateEmail);
