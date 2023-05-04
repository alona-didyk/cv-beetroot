const swiper = new Swiper(".slider__shop", {
  slidesPerView: 5,
  spaceBetween: 10,
  loop: true,
  autoplay: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-unique",
    prevEl: ".swiper-button-prev-unique",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      navigation: {
        enabled: false,
      },
    },
    421: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    769: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    1170: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
  },
});

