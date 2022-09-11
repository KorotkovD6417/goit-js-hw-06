let counterValue = 0;

const decrementBtnRef = document.querySelector('[data-action="decrement"]');
const incrementBtnRef = document.querySelector('[data-action="increment"]');
const spanRef = document.querySelector('#value');

const onDecrementBtnClick = event => {
  counterValue -= 1;
  spanRef.textContent = counterValue;
};
decrementBtnRef.addEventListener('click', onDecrementBtnClick);

const onIncrementBtnClick = event => {
  counterValue += 1;
  spanRef.textContent = counterValue;
};

incrementBtnRef.addEventListener('click', onIncrementBtnClick);