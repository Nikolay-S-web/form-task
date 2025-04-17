import { password_ShowButtons } from './variables';

function toggleFieldType(field) {
    let type = field.getAttribute('type') == 'password' ? 'text' : 'password';
    field.setAttribute('type', type);
}

export function setDefaultPasswordType(field) {
    field.setAttribute('type', 'password');
}

function preventShowButton(buttonShow) {
    buttonShow.addEventListener('click', (event) => {
        event.preventDefault();
        const buttonShow_ParentSet = buttonShow.closest('.form-password-set');
        const buttonShow_NeighbourPassword = buttonShow_ParentSet.querySelector('.input--password');

        toggleFieldType(buttonShow_NeighbourPassword);

        buttonShow_ParentSet.addEventListener('mouseleave', () => {
            setDefaultPasswordType(buttonShow_NeighbourPassword);
        });
    });
}

password_ShowButtons.forEach(preventShowButton);
