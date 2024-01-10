const password = document.querySelector('#user_password');
const passwordConfirm = document.querySelector('#user_password_confirm');
const passwordNoMatch = document.querySelector('form div p');

const passwordInfo = document.querySelector('.form-section > p');
const spanInfo = Array.from(passwordInfo.querySelectorAll('span'));

const regexPwd = /(?=.*(?:=>|<=))(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,}/;

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
  testPasswordRegex();
});

passwordConfirm.addEventListener('input', () => {
  if (password.value !== passwordConfirm.value) {
    passwordNoMatch.style.visibility = 'visible';
    passwordConfirm.setCustomValidity("Seals must match!!");
  } else {
    passwordNoMatch.style.visibility = 'hidden';
    passwordConfirm.setCustomValidity("");
  }
});

function testPasswordRegex() {
  if (/[a-z]/g.test(password.value) && /[A-Z]/g.test(password.value)) {
    spanInfo[0].classList.add('pwd-correct');
  } else {
    spanInfo[0].classList.remove('pwd-correct');
  }

  if (/\d/g.test(password.value)) {
    spanInfo[1].classList.add('pwd-correct');
  } else {
    spanInfo[1].classList.remove('pwd-correct');
  }

  if (/(=>|<=)/g.test(password.value)) {
    spanInfo[2].classList.add('pwd-correct');
  } else {
    spanInfo[2].classList.remove('pwd-correct');
  }
}