const password = document.querySelector('#user_password');
const passwordConfirm = document.querySelector('#user_password_confirm');
const regexPwd = /(?=.*(?:=>|<=))(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,}/g;

password.addEventListener('input', () => {
  if (password.value.length > 0) {
    passwordConfirm.removeAttribute('disabled', '');
  } else {
    passwordConfirm.setAttribute('disabled', '');
  }
  if (!regexPwd.test(password.value)) {
    password.setCustomValidity("Seal must have a minimum of 7 characters and contain at least: one lowercase and one uppercase letter, one number and one synergy arrow ( <= or => )");
  } else {
    password.setCustomValidity('');
  }
});

passwordConfirm.addEventListener('input', () => {
  if (password.value !== passwordConfirm.value) {
    passwordConfirm.setCustomValidity("Seals must match!!");
  } else {
    passwordConfirm.setCustomValidity("");
  }
});