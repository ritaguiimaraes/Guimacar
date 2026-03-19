const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('menu-overlay');
const openBtn = document.getElementById('open-menu');
const closeBtn = document.getElementById('close-menu');

function toggleMenu() {
    sidebar.classList.toggle('translate-x-full');
    overlay.classList.toggle('hidden');
}

if (openBtn) openBtn.addEventListener('click', toggleMenu);
if (closeBtn) closeBtn.addEventListener('click', toggleMenu);
if (overlay) overlay.addEventListener('click', toggleMenu);