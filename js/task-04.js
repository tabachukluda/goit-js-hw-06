let counterValue = 0
const counterEl = document.querySelector('#value')
const buttonDecrement = document.querySelector('button[data-action="decrement"]')
const buttonIncrement = document.querySelector('button[data-action="increment"]')
buttonDecrement.addEventListener('click', () => {
    counterValue--
    counterEl.textContent = counterValue;
});
buttonIncrement.addEventListener('click', () => {
    counterValue++
        counterEl.textContent = counterValue;
});