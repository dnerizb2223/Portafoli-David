const windowScrollThreshold = 100; // Umbral de desplazamiento para activar el cambio
const toggleSwitch = document.querySelector('.comic-button');
const comicButton = document.querySelector('.comic-button');
const container = document.querySelector('.container');

window.addEventListener("scroll", function() {
    if (window.scrollY > window.innerHeight) {
        comicButton.classList.add("scrolled-down");
        container.classList.add("scrolled-down");
    } else {
        comicButton.classList.remove("scrolled-down");
        container.classList.remove("scrolled-down");
    }
});

toggleSwitch.addEventListener("click", function() {
    const body = document.body;
    if (body.classList.contains("background-white")) {
        body.classList.remove("background-white");
    } else {
        body.classList.add("background-white");
    }
});
