const formRef = document.querySelector('.login-form');

const onFormSubmit = event => {
  event.preventDefault();
  const FORM_EMAIL = formRef.email.value;
  const FORM_PASSWORD = formRef.password.value;

  if (FORM_EMAIL === '' || FORM_PASSWORD === '') {
    return alert('All fileds must be filled');
  }

  const formData = {
    email: FORM_EMAIL,
    password: FORM_PASSWORD,
  };
  console.log(formData);

  formRef.reset();
};

formRef.addEventListener('submit', onFormSubmit);