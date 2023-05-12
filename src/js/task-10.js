function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsEl = document.querySelector('#controls>input')
const buttonDataCreateEl = document.querySelector('button[data-create]')
const buttonDataDestroyEl = document.querySelector('button[data-destroy]')
const boxEl = document.querySelector('#boxes')


