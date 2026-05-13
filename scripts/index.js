var swiper = new Swiper('.mySwiper', {
        slidesPerView: 1,
        spaceBetween: 10,

        breakpoints: {
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        },
      });