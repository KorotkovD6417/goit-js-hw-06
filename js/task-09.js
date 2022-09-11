const bodyRef = document.querySelector('body');
const spanRef = document.querySelector('.color');
const btnRef = document.querySelector('.change-color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const onBtnColorChange = event => {
  let color = getRandomHexColor();

  bodyRef.style.backgroundColor = color;
  spanRef.textContent = color;
};

btnRef.addEventListener('click', onBtnColorChange);