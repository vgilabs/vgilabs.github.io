let indexes = {Seminar_2025: 0, KCCV_2025: 0, ICML_2025: 0, CVPR_2025: 0, KCCV_2024: 0, ECCV_2024: 0, CVPR_2024: 0, KCCV_2023: 0}; 
// let indexes = {Seminar_2025: 0, KCCV_2025: 0, ICML_2025: 0, CVPR_2025: 0, ECCV_2024: 0, KCCV_2024: 0, CVPR_2024: 0, ICCV_2024: 0, KCCV_2023: 0}; 

document.addEventListener("DOMContentLoaded", function () {
    initDots("Seminar_2025");
    initDots("KCCV_2025");
    initDots("ICML_2025");
    initDots("CVPR_2025");
    initDots("ECCV_2024");
    initDots("KCCV_2024");
    initDots("CVPR_2024");
    // initDots("ICCV_2024");
    initDots("KCCV_2023");

    updateSlide("Seminar_2025");
    updateSlide("KCCV_2025");
    updateSlide("ICML_2025");
    updateSlide("CVPR_2025");
    updateSlide("ECCV_2024");
    updateSlide("KCCV_2024");
    updateSlide("CVPR_2024");
    // updateSlide("ICCV_2024");
    updateSlide("KCCV_2023");
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
