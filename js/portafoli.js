const comicButtons = document.querySelectorAll('.comic-button');

comicButtons.forEach(button => {
    button.addEventListener("click", function() {
        document.body.classList.toggle("background-white");
        toggleContentVisibility();
    });
});

function toggleContentVisibility() {
    const body = document.body;
    const isWhiteBackground = body.classList.contains("background-white");
    const quienSoy = document.querySelector('.quiensoy');
    const quienSoyInformatico = document.querySelector('.quiensoy-informatico');

    if (isWhiteBackground) {
        quienSoy.style.display = "flex";
        quienSoyInformatico.style.display = "none";
    } else {
        quienSoy.style.display = "none";
        quienSoyInformatico.style.display = "flex";
    }
}



window.addEventListener("scroll", function() {
    comicButtons.forEach(button => {
        if (window.scrollY > window.innerHeight) {
            button.classList.add("scrolled-down");
        } else {
            button.classList.remove("scrolled-down");
        }
    });
});