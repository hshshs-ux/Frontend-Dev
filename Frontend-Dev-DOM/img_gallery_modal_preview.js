const gallery = document.getElementById('gallery');
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modalContent');
const imageSources = [
  '/mnt/data/96364686-0759-439c-9955-f624190459f0.png',
  '/mnt/data/96364686-0759-439c-9955-f624190459f0.png',
  '/mnt/data/96364686-0759-439c-9955-f624190459f0.png',
  '/mnt/data/96364686-0759-439c-9955-f624190459f0.png',
  '/mnt/data/96364686-0759-439c-9955-f624190459f0.png',
  '/mnt/data/96364686-0759-439c-9955-f624190459f0.png'
];

imageSources.forEach(src => {
  const img = document.createElement('img');
  img.src = src;
  gallery.appendChild(img);
});

// open modal on image click
gallery.addEventListener('click', (e) => {
  if (e.target.tagName !== 'IMG') return;
  const src = e.target.src;
  modalContent.innerHTML = '';
  const big = document.createElement('img');
  big.src = src;
  big.style.width = '100%';
  modalContent.appendChild(big);
  modal.style.display = 'flex';
});

// close when clicking outside content
modal.addEventListener('click', () => modal.style.display = 'none');

// prevent closing when clicking inside modal content
modalContent.addEventListener('click', (e) => e.stopPropagation());
