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


window.addEventListener("scroll", function() { 

    
    var header = document.getElementById("header");
    // var welcome = document.getElementsByClassName("welcome")[0];
    var logo = document.querySelector(".img-logo");
    var banner = document.querySelector(".banner-area");
    var scrollPosition = window.scrollY;

    banner.style.backgroundPosition = `center ${50 - scrollPosition * 0.05}%`;

    if (window.scrollY > 5) {  // 스크롤되면 상태 변경
        header.classList.add("scrolled");  
        header.classList.remove("collapsed");
        // welcome.classList.add("with-fixed-header");
        logo.src = "../../images/logo/ver2/logo_white.png";  // 
    } else {  // 스크롤이 맨 위로 올라가면 원래대로 복귀
        header.classList.remove("scrolled");  
        header.classList.add("collapsed");
        // welcome.classList.remove("with-fixed-header");
        logo.src = "../../images/logo/ver2/left_logo.png"; 
        
        if (window.innerWidth <= 1020) return;
        banner.style.backgroundPosition = `center calc(-400px)`;
    }
});



var logo = document.querySelector(".img-logo");
const navLinks_li = document.querySelectorAll('.nav-links li');
const style1_li = document.querySelectorAll('.Style1 li'); // .Style1 내부의 li 선택
const header = document.querySelector("#header");

// 공통 동작 함수
function handleMouseEnter() {
  if (window.innerWidth > 1020 && !header.classList.contains('scrolled')) {
    logo.src = "../../images/logo/ver2/logo_white.png";
    header.classList.add('scrolled');
  }
}

function handleMouseLeave() {
  if (window.innerWidth > 1020 && header.classList.contains('scrolled') && window.scrollY <= 5) {
    logo.src = "../../images/logo/ver2/left_logo.png";
    header.classList.remove('scrolled');
  }
}


navLinks_li.forEach(link => {
  link.addEventListener('mouseenter', handleMouseEnter);
  link.addEventListener('mouseleave', handleMouseLeave);
});

style1_li.forEach(link => {
  link.addEventListener('mouseenter', handleMouseEnter);
  link.addEventListener('mouseleave', handleMouseLeave);
});
