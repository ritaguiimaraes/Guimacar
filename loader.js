/**
 * Loader / Splash Screen — Guimacar
 * Ficheiro único usado em todas as páginas.
 * Para usar: coloca <script src="loader.js"></script> no body, exatamente
 * no sítio onde antes estava o <div id="loader">...</div>.
 */
(function () {
    // Injeta o loader no DOM no momento exato em que este script é lido
    // (mesma posição onde estava o <div id="loader"> antigo).
    document.write(
        '<div id="loader" class="fixed inset-0 bg-black z-[9999] flex items-center justify-center transition-opacity duration-300">' +
            '<div class="text-center">' +
                '<img src="img/favicon.svg" alt="Guimacar" class="w-14 h-14 md:w-20 md:h-20 mx-auto mb-6 animate-pulse drop-shadow-[0_0_25px_rgba(249,115,22,0.6)]">' +
                '<div class="mb-8">' +
                    '<h1 class="text-3xl sm:text-4xl md:text-7xl font-semibold text-white tracking-tight drop-shadow-2xl uppercase italic">' +
                        'GUIMA<span class="text-orange-500 font-black">CAR</span>' +
                    '</h1>' +
                '</div>' +
                '<div class="flex justify-center space-x-2">' +
                    '<div class="w-3 h-3 bg-orange-500 rounded-full animate-bounce" style="animation-delay: 0s;"></div>' +
                    '<div class="w-3 h-3 bg-orange-500 rounded-full animate-bounce" style="animation-delay: 0.1s;"></div>' +
                    '<div class="w-3 h-3 bg-orange-500 rounded-full animate-bounce" style="animation-delay: 0.2s;"></div>' +
                '</div>' +
            '</div>' +
        '</div>'
    );

    function hideLoader() {
        const loader = document.getElementById('loader');
        if (!loader) return;
        loader.style.opacity = '0';
        setTimeout(function () {
            loader.style.display = 'none';
            document.body.classList.remove('overflow-hidden');
        }, 300);
    }

    // Só esconde quando a página estiver mesmo pronta.
    // Se ao chegar aqui a página já estiver "complete" (ex: muito rápida/cache),
    // esconde de imediato — sem esperas artificiais.
    if (document.readyState === 'complete') {
        hideLoader();
    } else {
        window.addEventListener('load', hideLoader);
    }
})();
