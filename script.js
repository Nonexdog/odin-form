const password = document.querySelector('#user_password');
const passwordConfirm = document.querySelector('#user_password_confirm');

password.addEventListener('input', () => {
  if (password.value.length > 0) {
    passwordConfirm.removeAttribute('disabled', '');
  } else {
    passwordConfirm.setAttribute('disabled', '');
  }
});

passwordConfirm.addEventListener('input', () => {
  if (password.value !== passwordConfirm.value) {
    passwordConfirm.setCustomValidity("Seals must match!!");
  } else {
    passwordConfirm.setCustomValidity("");
  }
});