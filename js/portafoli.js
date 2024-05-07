const toggleSwitch = document.querySelector('.switch input[type="checkbox"]');
const windowScrollThreshold = 100; // Umbral de desplazamiento para activar el cambio

toggleSwitch.addEventListener("change", function() {
    const body = document.body;
    if (this.checked) {
        body.classList.add("background-white");
    } else {
        body.classList.remove("background-white");
    }
});

window.addEventListener("scroll", function() {
    const switchContainer = document.querySelector('.switch');
    const switchWidth = 8; // Ancho del interruptor en rem
    const switchHeight = 4; // Altura del interruptor en rem
    const switchFontSize = 24; // Tamaño de fuente del interruptor en px
    const scrollDownClass = "scroll-down";

    if (window.scrollY > windowScrollThreshold) {
        switchContainer.classList.add(scrollDownClass);
        switchContainer.style.width = `${switchWidth / 2}rem`; // Mitad del ancho original
        switchContainer.style.height = `${switchHeight / 2}rem`; // Mitad de la altura original
        switchContainer.style.fontSize = `${switchFontSize / 2}px`; // Mitad del tamaño de fuente original
    } else {
        switchContainer.classList.remove(scrollDownClass);
        switchContainer.style.width = `${switchWidth}rem`; // Ancho original
        switchContainer.style.height = `${switchHeight}rem`; // Altura original
        switchContainer.style.fontSize = `${switchFontSize}px`; // Tamaño de fuente original
    }
});
