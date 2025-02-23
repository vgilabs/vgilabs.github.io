let index2 = 0;

function moveSlide(step) {
    const slides = document.querySelector(".slides");
    const totalSlides = document.querySelectorAll(".slide").length;
    
    index2 = (index2 + step + totalSlides) % totalSlides;
    slides.style.transform = `translateX(-${index2 * 100}%)`;
}


let index = 0;

document.addEventListener("DOMContentLoaded", function() {
    initDots();
    updateSlide();
});

function initDots() {
    const slides = document.querySelectorAll(".slide");
    const dotsContainer = document.querySelector(".dots-container");

    // 기존 도트 삭제
    dotsContainer.innerHTML = "";

    // 슬라이드 개수만큼 도트 생성
    slides.forEach((_, i) => {
        let dot = document.createElement("span");
        dot.classList.add("dot");
        dot.addEventListener("click", () => currentSlide(i));
        dotsContainer.appendChild(dot);
    });
}

function moveSlide(step) {
    const slides = document.querySelectorAll(".slide");

    index = (index + step + slides.length) % slides.length;
    updateSlide();
}

function currentSlide(n) {
    index = n;
    updateSlide();
}

function updateSlide() {
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");

    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? "block" : "none";
    });

    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
    });
}
