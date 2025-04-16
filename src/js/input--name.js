import { resetFieldsError } from './form';

import { nameField, nameField_getValue, nameField_Error, nameField_Regex } from './variables';

let isNameValid;

function setError_nameField(errorMessage) {
    nameField.classList.add('error');
    nameField_Error.innerText = errorMessage;
    nameField_Error.classList.add('active');
}

function remmoveError_nameField() {
    nameField.classList.remove('error');
    nameField_Error.classList.remove('active');
}

export function validate_nameField() {
    if (nameField_getValue() == '') {
        setError_nameField('Введите имя пользователя!');
        return false;
    } else if (nameField_getValue().length < 4) {
        setError_nameField('Имя должно содержать не менее 4х символов!');
        return false;
    } else if (!nameField_Regex.test(nameField_getValue())) {
        setError_nameField('Только буквы и цифры!');
        return false;
    }
    remmoveError_nameField();
    return true;
}

nameField.addEventListener('click', () => {
    resetFieldsError(nameField);
});

let delay;

nameField.addEventListener('input', () => {
    if (nameField_getValue().length < 4) {
        function setDelay() {
            clearTimeout(delay);
            delay = setTimeout(() => {
                isNameValid = validate_nameField();
            }, 2000);
        }
        setDelay();
    } else {
        isNameValid = validate_nameField();
    }
});

nameField.addEventListener('blur', validate_nameField);
