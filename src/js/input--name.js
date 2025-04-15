import { resetFieldsError } from './form';

import {
    nameField,
    nameField_getValue,
    nameField_ParentItem,
    nameField_Error,
    nameField_Regex,
} from './variables';

export function validateName() {
    if (nameField_getValue() == '') {
        nameField_Error.innerText = 'Введите имя пользователя!';
        nameField_Error.classList.add('active');
        nameField.classList.add('error');
        return false;
    } else if (nameField_getValue().length < 4) {
        nameField.classList.add('error');
        nameField_Error.innerText = 'Имя должно быть не менее 3х символов!';
        nameField_Error.classList.add('active');
        return false;
    } else if (!nameField_Regex.test(nameField_getValue())) {
        nameField_Error.innerText = 'Только буквы и цифры!';
        nameField_Error.classList.add('active');
        nameField.classList.add('error');
        return false;
    }
    nameField.classList.remove('error');
    nameField_Error.classList.remove('active');
    return true;
}

nameField.addEventListener('focus', () => {
    resetFieldsError(nameField);
});

let delay;

nameField.addEventListener('input', () => {
    function setDelay() {
        clearTimeout(delay);
        delay = setTimeout(() => {
            validateName();
        }, 2000);
    }
    setDelay();
});

nameField.addEventListener('blur', validateName);
