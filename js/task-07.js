const inputFontSizeEl = document.querySelector('input#font-size-control')
const spanTextEl = document.querySelector('span#text')
inputFontSizeEl.addEventListener('change', onChangeInput);
function onChangeInput(event) {
    spanTextEl.style.fontSize=`${event.target.value }px`
};