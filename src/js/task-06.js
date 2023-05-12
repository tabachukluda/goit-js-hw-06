const validationInputEl = document.querySelector('#validation-input');
validationInputEl.addEventListener('blur', onInputLength);
function onInputLength(event) {
    if (event.target.value.length == validationInputEl.getAttribute('data-length')) {
        validationInputEl.classList.add('valid')
    
        if (validationInputEl.classList.contains('invalid')) {
            validationInputEl.classList.remove('invalid');
        }
    } else {
        if (validationInputEl.classList.contains('valid')) {
            validationInputEl.classList.remove('valid')
        }
        validationInputEl.classList.add('invalid');
    }
}