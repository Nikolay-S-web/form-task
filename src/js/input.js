const form = document.getElementById('form');
const submitButton = document.getElementById('submit-button');

const nameField = document.getElementById('name');
const nameError = document.getElementById('name-error');

const emailField = document.getElementById('email');

const passwordField = document.getElementById('password');
const passwordSet = document.getElementById('password-set');

const passwordRepeatField = document.getElementById('password-repeat');
const passwordRepeatSet = document.getElementById('password-repeat-set');

const terms = document.getElementById('terms');

function resetFieldsError(field) {
    if (field) {
        field.classList.remove('error');
        return;
    }
    nameField.classList.remove('error');
    emailField.classList.remove('error');
    passwordSet.classList.remove('error');
    passwordRepeatSet.classList.remove('error');
}

function validateName() {
    const nameFieldValue = nameField.value;
    if (nameFieldValue.length < 4) {
        nameField.classList.add('error');
        nameError.innerText = 'Имя должно быть не менее 3х символов!';
        nameError.classList.add('active');
        return false;
    }
    return true;
}

function validateForm(event) {
    event.preventDefault();

    if (validateName()) {
        submitButton.classList.add('valid');
    }
}

form.addEventListener('submit', validateForm);
