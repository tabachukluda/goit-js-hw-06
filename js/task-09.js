function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonChangeColorEl = document.querySelector('button.change-color')
const bodyEl = document.querySelector('body')
const spanColorEl = document.querySelector('span.color')
buttonChangeColorEl.addEventListener('click', onChangeColor);
function onChangeColor(event) {
  let color = getRandomHexColor();
  bodyEl.style.background = color;
  spanColorEl.textContent = color;
}
