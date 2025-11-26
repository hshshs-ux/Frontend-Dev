// Q6 - Real-time table filter (case-insensitive)
const searchInput = document.getElementById('search');
const table = document.getElementById('studentsTable').tBodies[0];
const noResults = document.getElementById('noResults');

searchInput.addEventListener('input', () => {
  const q = searchInput.value.trim().toLowerCase();
  let visibleCount = 0;
  Array.from(table.rows).forEach(row => {
    const text = row.textContent.toLowerCase();
    const match = text.includes(q);
    row.style.display = match ? '' : 'none';
    if (match) visibleCount++;
  });
  noResults.style.display = visibleCount === 0 ? '' : 'none';
});
