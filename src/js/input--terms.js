import { termsCheckbox, termsCheckbox_checkOn, termsCheckbox_Error } from './variables';

function setError_TermsCheckbox() {
    termsCheckbox.classList.add('error');
    termsCheckbox_Error.classList.add('active');
}
function removeError_TermsCheckbox() {
    termsCheckbox.classList.remove('error');
    termsCheckbox_Error.classList.remove('active');
}

export function validateTermsCheckbox() {
    if (!termsCheckbox_checkOn()) {
        setError_TermsCheckbox();
        return false;
    }
    removeError_TermsCheckbox();
    return true;
}

termsCheckbox.addEventListener('mouseover', removeError_TermsCheckbox);
