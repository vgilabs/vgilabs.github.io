const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', show);

function show() {
    //Burger Animation
    nav.classList.toggle('nav-active');
    burger.classList.toggle('close');
    
    //Animate Links
    for (var index = 0; index < navLinks.length; index++) {
        if(navLinks[index].style.animation){
            navLinks[index].style.animation = '';
        } else {
            navLinks[index].style.animation = 'navLinkFade 0.3s ease forwards';
        }
    };
}


document.getElementById("read-more-btn").addEventListener("click", function() {
    var hiddenNews = document.querySelector(".hidden-news");
    var newsContainer = document.querySelector(".wrap-horizontal");
    var buttonPosition = this.getBoundingClientRect().top + window.scrollY; // 버튼의 현재 위치 저장

    if (hiddenNews.style.display === "none" || hiddenNews.style.display === "") {
        hiddenNews.style.display = "block"; 
        newsContainer.classList.add("expanded"); 
        this.textContent = "Show Less"; 

        window.scrollTo({
            top: window.scrollY + 250, 
            behavior: "smooth"
        });

    } else {
        hiddenNews.style.display = "none"; 
        newsContainer.classList.remove("expanded"); 
        this.textContent = "Read More"; 

        this.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }
});



window.addEventListener("scroll", function() { 

    // if (window.innerWidth <= 1020) return;

    var header = document.getElementById("header");
    var welcome = document.getElementsByClassName("welcome")[0];
    var logo = document.querySelector(".img-logo");
    var banner = document.querySelector(".banner-area");
    var scrollPosition = window.scrollY;

    banner.style.backgroundPosition = `center ${50 - scrollPosition * 0.05}%`;

    if (window.scrollY > 5) {  // 스크롤되면 상태 변경
        header.classList.add("scrolled");  
        header.classList.remove("collapsed");
        welcome.classList.add("with-fixed-header");
        logo.src = "images/logo/ver2/logo_white.png";
    } else {  // 스크롤이 맨 위로 올라가면 원래대로 복귀
        header.classList.remove("scrolled");  
        header.classList.add("collapsed");
        welcome.classList.remove("with-fixed-header");
        logo.src = "images/logo/ver2/left_logo.png";  //
    }
});


let interval;
const getInterval = () => {
  return setInterval(() => {
    currentIndex++;
    currentIndex = currentIndex >= slides.length ? 0 : currentIndex; 
    updateSlide();
  }, 5000); // 5초 간격으로 슬라이드 변경
};

let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.querySelector('.dots');
const slidesContainer = document.querySelector('.slides');

slides.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    dot.onclick = () => {
      clearInterval(interval); // 사용자 클릭 시 자동 슬라이드 일시 정지
      moveSlideTo(index);
      interval = getInterval(); // 다시 자동 슬라이드 시작
    };
    dotsContainer.appendChild(dot);
  });

const dots = document.querySelectorAll('.dot');

function moveSlide(direction) {
    currentIndex += direction;
    // 슬라이드 개수를 벗어나면 처음 또는 마지막으로 이동
    if (currentIndex >= slides.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = slides.length - 1;
    updateSlide();
}

function moveSlideTo(index) {
    currentIndex = index;
    updateSlide();
}

function updateSlide() {
    const slideWidth = slides[0].getBoundingClientRect().width; // 너비 계산
    slidesContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

window.addEventListener("resize", () => {
    updateSlide(); // 화면 크기가 변경되면 슬라이드 너비 재계산
});
// 초기화
document.addEventListener("DOMContentLoaded", () => {
    updateSlide(); // 초기 슬라이드 위치 설정
    interval = getInterval(); // 자동 슬라이드 시작
  });


