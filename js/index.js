"use strict"

const gallery = new Swiper(".gallery", {
  direction: "horizontal",
  slidesPerView: "auto",
  loop: true,
  speed: 3000,
  effect: "cube",
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
  initialSlide: 0,
  loop: true,
  speed: 3000,
  effect: "coverflow",
  slidesPerView: 3,
  sentredSlides: true,
  dynamicBullets: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },

  autoplay: {
    delay: 3000,
  },

});
