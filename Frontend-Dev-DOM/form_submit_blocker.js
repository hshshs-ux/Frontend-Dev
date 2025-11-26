const form = document.getElementById('regForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const pwInput = document.getElementById('password');
const errName = document.getElementById('errName');
const errEmail = document.getElementById('errEmail');
const errPassword = document.getElementById('errPassword');
const successDiv = document.getElementById('success');

function validate() {
  let ok = true;
  errName.textContent = '';
  errEmail.textContent = '';
  errPassword.textContent = '';
  if (!nameInput.value.trim()) { errName.textContent = ' Name required'; ok = false; }
  if (!emailInput.value.includes('@')) { errEmail.textContent = ' Valid email required'; ok = false; }
  if (pwInput.value.length < 6) { errPassword.textContent = ' Password min 6 chars'; ok = false; }
  return ok;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  successDiv.textContent = '';
  if (validate()) {
    successDiv.textContent = 'Form Submitted Successfully';
  }
});

[nameInput, emailInput, pwInput].forEach(input => {
  input.addEventListener('input', () => {
    validate();
  });
});
