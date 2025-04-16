import { termsCheckbox, termsCheckbox_checkValue } from './variables';

function setError_TermsCheckbox() {
    termsCheckbox.classList.add('error');
}
function removeError_TermsCheckbox() {
    termsCheckbox.classList.remove('error');
}

export function validateTermsCheckbox() {
    if (!termsCheckbox_checkValue()) {
        setError_TermsCheckbox();
        return false;
    }
    removeError_TermsCheckbox();
    return true;
}

termsCheckbox.addEventListener('mouseover', removeError_TermsCheckbox);
