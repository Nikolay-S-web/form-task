import { password_ShowButtons } from './variables';

function preventShowButton(buttonShow) {
    buttonShow.addEventListener('click', (event) => {
        event.preventDefault();
        const buttonShow_ParentSet = buttonShow.closest('.form-password-set');
        const buttonShow_NeighbourPassword = buttonShow_ParentSet.querySelector('.input--password');
        let type =
            buttonShow_NeighbourPassword.getAttribute('type') == 'password' ? 'text' : 'password';
        buttonShow_NeighbourPassword.setAttribute('type', type);
        buttonShow_ParentSet.addEventListener('mouseleave', () => {
            buttonShow_NeighbourPassword.setAttribute('type', 'password');
        });
    });
}

password_ShowButtons.forEach(preventShowButton);
