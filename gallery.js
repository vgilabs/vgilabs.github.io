let indexes = { cvpr_2025: 0,kccv_2024: 0, cvpr_2024: 0 , kccv_2023: 0}; 

document.addEventListener("DOMContentLoaded", function () {
    initDots("cvpr_2025");
    initDots("kccv_2024");
    initDots("cvpr_2024");
    initDots("kccv_2023");

    updateSlide("cvpr_2025");
    updateSlide("kccv_2024");
    updateSlide("cvpr_2024");
    updateSlide("kccv_2023");
});

function initDots(gallery) {
    const slides = document.querySelector(`#${gallery}-gallery .slides`).children;
    const dotsContainer = document.querySelector(`#${gallery}-gallery .dots-container`);
    dotsContainer.innerHTML = "";

    Array.from(slides).forEach((_, i) => {
        let dot = document.createElement("span");
        dot.classList.add("dot");
        dot.addEventListener("click", () => currentSlide(i, gallery));
        dotsContainer.appendChild(dot);
    });
}

function moveSlide(step, gallery) {
    const slides = document.querySelector(`#${gallery}-gallery .slides`).children;
    indexes[gallery] = (indexes[gallery] + step + slides.length) % slides.length;
    updateSlide(gallery);
}

function currentSlide(n, gallery) {
    indexes[gallery] = n;
    updateSlide(gallery);
}

function updateSlide(gallery) {
    const slides = document.querySelectorAll(`#${gallery}-gallery .slide`);
    const dots = document.querySelectorAll(`#${gallery}-gallery .dot`);

    slides.forEach((slide, i) => {
        slide.style.display = i === indexes[gallery] ? "block" : "none";
    });

    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === indexes[gallery]);
    });
}
