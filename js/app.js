document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
    },
    breakpoints: {
    1200: {
      slidesPerView: 3, 
    },
    992: {
      slidesPerView: 2, 
    },
    768: {
      slidesPerView: 2, 
    },
    576: {
      slidesPerView: 2, 
    },
  },
});
});