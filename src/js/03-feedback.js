import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle(onInputForm, 500));
form.addEventListener('submit', onSubmitForm);

const LOCAL_STORAGE_KEY = 'feedback-form-state';
const emailForm = form.email;
const messageForm = form.message;

let formData = {};

formData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
if (formData !== {} && formData !== null) {
  const { email, message } = formData;
  emailForm.value = email;
  messageForm.value = message;
}

function onInputForm() {
  formData = {
    email: form.email.value,
    message: form.message.value,
  };
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
}

function onSubmitForm(evt) {
  evt.preventDefault();
  localStorage.removeItem(LOCAL_STORAGE_KEY);
  form.reset();
  console.log(formData);
}
