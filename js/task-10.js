const inputRef = document.querySelector('input[type=number]');
const createBtnRef = document.querySelector('button[data-create]');
const destriyBtnRef = document.querySelector('button[data-destroy]');
const divRef = document.querySelector('#boxes');

inputRef.addEventListener('input', onValueInput);

function onValueInput() {
  return inputRef.value;
}
createBtnRef.addEventListener('click', createBoxes);

destriyBtnRef.addEventListener('click', destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let amount = 0;

function createBoxes(event) {
  event.preventDefault();
  const amountOfBoxes = onValueInput();
  const newBoxArr = [];

  for (let i = 0; i < amountOfBoxes; i += 1) {
    let createBoxEl = document.createElement('div');
    createBoxEl.style.width = `${30 + 10 * amount}px`;
    createBoxEl.style.height = `${30 + 10 * amount}px`;
    amount += 1;
    createBoxEl.style.backgroundColor = getRandomHexColor();
    newBoxArr.push(createBoxEl);
  }

  divRef.append(...newBoxArr);
}

function destroyBoxes() {
  divRef.innerHTML = '';
}