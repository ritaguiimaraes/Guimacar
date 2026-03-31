const mobileMenu = document.getElementById('mobile-menu') || document.getElementById('sidebar');
const overlay = document.getElementById('menu-overlay');
const openBtn = document.getElementById('open-menu-header') || document.getElementById('open-menu');
const closeBtn = document.getElementById('close-menu');
const mainHeader = document.getElementById('main-header');

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

let lastScrollY = window.scrollY;
let headerVisible = false;

function handleScroll() {
    if (!mainHeader) return;

    const currentScrollY = window.scrollY;
    const heroSection = document.querySelector('.relative.h-screen');
    const heroHeight = heroSection ? heroSection.offsetHeight : window.innerHeight;

    if (currentScrollY > heroHeight * 0.8) {
        if (!headerVisible) {
            mainHeader.classList.remove('-translate-y-full');
            mainHeader.classList.add('translate-y-0');
            headerVisible = true;
        }
    } else {
        if (headerVisible) {
            mainHeader.classList.add('-translate-y-full');
            mainHeader.classList.remove('translate-y-0');
            headerVisible = false;
        }
    }

    lastScrollY = currentScrollY;
}

if (openBtn) openBtn.addEventListener('click', toggleMenu);
if (closeBtn) closeBtn.addEventListener('click', closeMenu);
if (overlay) overlay.addEventListener('click', closeMenu);

window.addEventListener('scroll', handleScroll, { passive: true });

if (mainHeader) {
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY < 100) {
            mainHeader.style.transform = 'translateY(-100%)';
        } else if (currentScrollY < lastScrollY) {
            mainHeader.style.transform = 'translateY(0)';
        } else {
            mainHeader.style.transform = 'translateY(-100%)';
        }

        lastScrollY = currentScrollY;
    });
}
