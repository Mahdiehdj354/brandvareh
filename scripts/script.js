var swiperSuggestion = new Swiper(".mySwiperSuggestion", {
  slidesPerView: 1,
  spaceBetween: 10,
  slidesPerGroup: 1,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    960: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination-suggestion",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-suggestion",
    prevEl: ".swiper-button-prev-suggestion",
  },
});
var swiperNewProduct = new Swiper(".mySwiperNewProduct", {
  slidesPerView: 2,
  spaceBetween: 10,
  slidesPerGroup: 1,
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    960: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-button-next-newProduct",
    prevEl: ".swiper-button-prev-newProduct",
  },
});
