import { emailField, emailField_getValue, emailField_Error } from './variables';

function setError_nameField(errorMessage) {
    emailField.classList.add('error');
    emailField_Error.innerText = errorMessage;
    emailField_Error.classList.add('active');
}
export function remmoveError_emailField() {
    emailField.classList.remove('error');
    emailField_Error.classList.remove('active');
}

function isEmailValid() {
    const atIndex = emailField_getValue().indexOf('@');
    const dotIndex = emailField_getValue().lastIndexOf('.');
    if (atIndex <= 0 || dotIndex < atIndex + 2 || dotIndex === emailField_getValue().length - 1) {
        emailField.classList.add('error');
        emailField_Error.innerText = 'Введен некоректный email!';
        emailField_Error.classList.add('active');
        return false;
    }
    return true;
}

export function validate_emailField() {
    if (!emailField_getValue()) {
        setError_nameField('Email обязателен!');
        return false;
    } else if (emailField_getValue().length < 4) {
        setError_nameField('Введен некоректный email!');
        return false;
    } else if (!isEmailValid()) {
        setError_nameField('Введен некоректный email!');
        return false;
    }
    remmoveError_emailField();
    return true;
}

emailField.addEventListener('click', () => {
    remmoveError_emailField();
});

emailField.addEventListener('blur', validate_emailField);
