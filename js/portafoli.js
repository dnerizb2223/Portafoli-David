const comicButtons = document.querySelectorAll('.comic-button');

comicButtons.forEach(button => {
    button.addEventListener("click", function() {
        document.body.classList.toggle("background-white");
        toggleContentVisibility();
    });
});

function toggleContentVisibility() {
    const isWhiteBackground = document.body.classList.contains("background-white");
    const whiteContent = document.querySelectorAll('.container, .quiensoy-cualidades');
    const blackContent = document.querySelectorAll('.container-informatico, .quiensoy-informatico');

    whiteContent.forEach(content => {
        content.style.display = isWhiteBackground ? "flex" : "none";
    });

    blackContent.forEach(content => {
        content.style.display = isWhiteBackground ? "none" : "flex";
    });
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

// Initial toggle to ensure correct visibility on load
toggleContentVisibility();
