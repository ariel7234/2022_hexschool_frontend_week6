"use strict";

//FIXME: swiper 無法自訂每頁卡片數量
// var cardSwiper = new Swiper(".swiper-card", {
//   loop: true,
//   autoplay: {
//     delay: 2500,
//     // disableOnInteraction: false,
//   },
//   breakpoints: {
//     // 375: {
//     //   slidesPerView: 3,
//     //   spaceBetween: 8,
//     // },
//     // 640: {
//     //   slidesPerView: 2,
//     //   spaceBetween: 20,
//     // },
//     768: {
//       slidesPerView: 3,
//       spaceBetween: 8,
//     },
//     // 992: {
//     //   slidesPerView: 4,
//     //   spaceBetween: 24,
//     // },
//   },
// });
var shareSwiper = new Swiper(".swiper-custom", {
  effect: "fade",
  fadeEffect: {
    crossFade: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  pagination: {
    el: ".swiper-pagination"
  }
});
//# sourceMappingURL=all.js.map
