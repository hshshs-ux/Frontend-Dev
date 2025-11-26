const productInput = document.getElementById('productInput');
const addProductBtn = document.getElementById('addProductBtn');
const productList = document.getElementById('productList');

function createProductItem(name) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.textContent = name;
  span.className = 'name';
  const actions = document.createElement('div');
  const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';
  editBtn.className = 'edit';
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.className = 'delete';
  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);
  li.appendChild(span);
  li.appendChild(actions);
  return li;
}

addProductBtn.addEventListener('click', () => {
  const name = productInput.value.trim();
  if (!name) return;
  productList.appendChild(createProductItem(name));
  productInput.value = '';
});

productList.addEventListener('click', (e) => {
  const target = e.target;
  const li = target.closest('li');
  if (!li) return;

  if (target.classList.contains('delete')) {
    li.remove();
  } else if (target.classList.contains('edit')) {
    enterEditMode(li);
  }
});

document.addEventListener('click', (e) => {
  const editing = productList.querySelector('.editing');
  if (editing && !editing.contains(e.target)) {
    exitEditMode(editing, true);
  }
}, true);

function enterEditMode(li) {
  if (li.classList.contains('editing')) return;
  li.classList.add('editing');
  const nameSpan = li.querySelector('.name');
  const current = nameSpan.textContent;
  const input = document.createElement('input');
  input.value = current;
  input.style.flex = '1';
  li.insertBefore(input, nameSpan);
  nameSpan.style.display = 'none';
  input.focus();

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') exitEditMode(li, true);
    if (e.key === 'Escape') exitEditMode(li, false);
  });
}

function exitEditMode(li, save) {
  if (!li.classList.contains('editing')) return;
  const input = li.querySelector('input');
  const nameSpan = li.querySelector('.name');
  if (save) {
    const newVal = input.value.trim();
    if (newVal) nameSpan.textContent = newVal;
  }
  input.remove();
  nameSpan.style.display = '';
  li.classList.remove('editing');
}
