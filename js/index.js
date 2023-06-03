"use strict"

const gallery = new Swiper(".gallery", {
    direction: "horizontal",
    initialSlide: 0,
    loop: true,
    speed: 3000,
    effect: "flip",
    sentredSlides: true,
    dynamicBullets: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    autoplay: {
        delay: 3000,
    },
});

const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    initialSlide: 10,
    loop: true,
    speed: 3000,
    effect: "coverflow",
    slidesPerView: 3,
    spaceBetween: 20,
    sentredSlides: true,
    dynamicBullets: true,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    autoplay: {
        delay: 3000,
    },

    // breakpoints: {
    //     // when window width is >= 320px
    //     320: {
    //     slidesPerView: 1,
        
    //     },
    //     // when window width is >= 480px
    //     480: {
    //     slidesPerView: 2,
        
    //     },
    //     // when window width is >= 640px
    //     640: {
    //     slidesPerView: 3,
        
    //     },
    // },
});
