const dropdownBtn = document.getElementById('dropdownBtn');
const optionsDiv = document.getElementById('options');
const dropdown = document.getElementById('customDropdown');

['Option 1','Option 2','Option 3'].forEach(text => {
  const opt = document.createElement('div');
  opt.className = 'opt';
  opt.textContent = text;
  optionsDiv.appendChild(opt);
});

dropdownBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  optionsDiv.style.display = optionsDiv.style.display === 'none' ? '' : 'none';
});

optionsDiv.addEventListener('click', (e) => {
  if (e.target.classList.contains('opt')) {
    dropdownBtn.textContent = e.target.textContent;
    optionsDiv.style.display = 'none';
  }
});

document.addEventListener('click', (e) => {
  if (!dropdown.contains(e.target)) {
    optionsDiv.style.display = 'none';
  }
}, true);
