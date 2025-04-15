import { form_Notice, form_SubmitButton } from './variables';

function noticeNotValid() {
    if (!form_SubmitButton.classList.contains('isValid')) {
        switch (form_Notice.classList.contains('active')) {
            case true:
                form_Notice.classList.remove('active');
                break;
            case false:
                form_Notice.classList.add('active');
                break;
        }
    }
}

form_SubmitButton.addEventListener('mouseover', noticeNotValid);

form_SubmitButton.addEventListener('mouseout', noticeNotValid);
