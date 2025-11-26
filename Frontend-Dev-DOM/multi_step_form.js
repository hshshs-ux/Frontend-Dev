let currentStep = 1;
const totalSteps = 3;
const backBtn = document.getElementById('backBtn');
const nextBtn = document.getElementById('nextBtn');
const summaryDiv = document.getElementById('summary');

function showStep(step) {
  document.querySelectorAll('.step').forEach(s => s.style.display = s.dataset.step == step ? '' : 'none');
  backBtn.disabled = step === 1;
  nextBtn.textContent = step === totalSteps ? 'Finish' : 'Next';
}

function validateStep(step) {
  if (step === 1) {
    const name = document.getElementById('name').value.trim();
    return name.length > 0;
  } else if (step === 2) {
    const email = document.getElementById('email').value.trim();
    return email.includes('@');
  } else if (step === 3) {
    const pw = document.getElementById('password').value;
    return pw.length >= 6;
  }
  return false;
}

backBtn.addEventListener('click', () => {
  if (currentStep > 1) {
    currentStep--;
    showStep(currentStep);
  }
});

nextBtn.addEventListener('click', () => {
  if (!validateStep(currentStep)) {
    alert('Please enter valid input for this step');
    return;
  }
  if (currentStep === totalSteps) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    summaryDiv.textContent = `Summary: ${name} | ${email}`;
  } else {
    currentStep++;
    showStep(currentStep);
  }
});

showStep(currentStep);
