// Q2 - Live Character Counter with warning and preventDefault behavior
const textarea = document.getElementById('message');
const counter = document.getElementById('counter');
const resetBtn = document.getElementById('resetBtn');
const MAX = 100;
const WARN_THRESHOLD = 20;

function updateCounter() {
  const remaining = MAX - textarea.value.length;
  counter.textContent = remaining;
  counter.style.background = '';
  if (remaining <= 0) counter.style.background = 'salmon';
  else if (remaining <= WARN_THRESHOLD) counter.style.background = 'yellow';
}

textarea.addEventListener('input', () => {
  if (textarea.value.length > MAX) {
    textarea.value = textarea.value.slice(0, MAX);
  }
  updateCounter();
});

// Prevent typing further characters when at max
textarea.addEventListener('keydown', (e) => {
  if (textarea.value.length >= MAX && e.key.length === 1 && !e.ctrlKey && !e.metaKey) {
    e.preventDefault();
  }
});

resetBtn.addEventListener('click', () => {
  textarea.value = '';
  updateCounter();
});

updateCounter();
