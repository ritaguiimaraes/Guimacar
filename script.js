const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('menu-overlay');
const openBtn = document.getElementById('open-menu');
const closeBtn = document.getElementById('close-menu');
const mainHeader = document.getElementById('main-header');
const openMenuHeader = document.getElementById('open-menu-header');

function toggleMenu() {
    sidebar.classList.toggle('translate-x-full');
    overlay.classList.toggle('hidden');
}

// Controlar header fixo após scroll
let lastScrollY = window.scrollY;
let headerVisible = false;

function handleScroll() {
    const currentScrollY = window.scrollY;
    const heroSection = document.querySelector('.relative.h-screen');
    const heroHeight = heroSection ? heroSection.offsetHeight : window.innerHeight;
    
    // Mostrar header apenas depois de passar a hero section
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

// Event listeners
if (openBtn) openBtn.addEventListener('click', toggleMenu);
if (closeBtn) closeBtn.addEventListener('click', toggleMenu);
if (overlay) overlay.addEventListener('click', toggleMenu);
if (openMenuHeader) openMenuHeader.addEventListener('click', toggleMenu);

window.addEventListener('scroll', handleScroll, { passive: true });


const header = document.getElementById('main-header');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY < 100) {
        // No topo da página — esconde sempre
        header.style.transform = 'translateY(-100%)';
    } else if (currentScrollY < lastScrollY) {
        // A fazer scroll para cima — mostra
        header.style.transform = 'translateY(0)';
    } else {
        // A fazer scroll para baixo — esconde
        header.style.transform = 'translateY(-100%)';
    }

    lastScrollY = currentScrollY;
});