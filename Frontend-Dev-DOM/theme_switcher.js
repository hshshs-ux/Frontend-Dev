const themeButtons = document.querySelectorAll('.themeBtn');
themeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const theme = btn.getAttribute('data-theme');
    document.body.setAttribute('data-theme', theme);
    document.body.setAttribute('data-current-theme', theme);
  });
});

if (!document.body.getAttribute('data-theme')) {
  document.body.setAttribute('data-theme', 'light');
}
