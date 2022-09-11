const inputRef = document.querySelector('#validation-input');

const onFocusInputChange = () => {
  const INPUT_PASS_LENGTH = Number(inputRef.dataset.length);

  if (inputRef.value.length === INPUT_PASS_LENGTH) {
    inputRef.classList.remove('invalid');
    inputRef.classList.add('valid');
  }
  if (inputRef.value.length !== INPUT_PASS_LENGTH) {
    inputRef.classList.remove('valid');
    inputRef.classList.add('invalid');
  }
};

inputRef.addEventListener('blur', onFocusInputChange);