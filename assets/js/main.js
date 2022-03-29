// Show Menu
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

// Menu Show
// validate if constant exists
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add("show-menu")
    })
}

// Menu hidden
// validate if constant exists

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove("show-menu")
    })
}

// Remove menu mobile

const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // when we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// CHANGE BACKGROUND HEADER

function scrollHeader() {

    const header = document.getElementById('header')

    if (this.scrollY >= 50) {
        header.classList.add('scroll-header')

    } else {
        header.classList.remove('scroll-header')
    }

}
window.addEventListener('scroll', scrollHeader)

// swiper 
let swiperPopular = new Swiper(".popular__container", {
    loop: true,
    spaceBetween: 24,
    slidesPerView: "auto",

    grabCursor: true,

    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },

    breakpoints: {

        768: {
            slidesPerView: 3,
        },
        1024: {
            spaceBetween: 50,
        },
    },
});