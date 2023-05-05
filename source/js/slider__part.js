const menu = ["", "", ""];

const swiperPart = new Swiper(".partners.swiper", {
  slidesPerView: 9,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 1500,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  navigation: {
    nextEl: ".swiper-button-next-unique-part",
    prevEl: ".swiper-button-prev-unique-part",
  },

  pagination: {
    el: ".swiper-pagination",
    enabled: false,
    clickable: true,
    renderBullet: (index, className) =>
      `<span class="${className}">${menu[index]}</span>`,
  },

  breakpoints: {
    320: {
      slidesPerView: 2,
      slidesPerGroup: 2,

      pagination: {
        enabled: true,
      },
    },
    600: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
    920: {
      slidesPerView: 9,
      spaceBetween: 40,
    },
  },
});
