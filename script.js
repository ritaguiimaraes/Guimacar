const mobileMenu = document.getElementById('mobile-menu') || document.getElementById('sidebar');
const overlay = document.getElementById('menu-overlay');
const openBtn = document.getElementById('open-menu-header') || document.getElementById('open-menu');
const closeBtn = document.getElementById('close-menu');

function openMenu() {
    if (!mobileMenu || !overlay) return;
    mobileMenu.classList.remove('translate-x-full');
    overlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    if (!mobileMenu || !overlay) return;
    mobileMenu.classList.add('translate-x-full');
    overlay.classList.add('hidden');
    document.body.style.overflow = '';
}

function toggleMenu() {
    if (!mobileMenu) return;

    if (mobileMenu.classList.contains('translate-x-full')) {
        openMenu();
    } else {
        closeMenu();
    }
}

if (openBtn) openBtn.addEventListener('click', toggleMenu);
if (closeBtn) closeBtn.addEventListener('click', closeMenu);
if (overlay) overlay.addEventListener('click', closeMenu);
