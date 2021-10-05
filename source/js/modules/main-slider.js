const initMainSlider = ()=> {
  const mainSliderContainer = document.querySelector('.swiper-container-main');

  if (!mainSliderContainer) {
    return;
  }

  let mainSwiper = new Swiper(mainSliderContainer, {
    loop: true,
    direction: 'horizontal',
    navigation: {
      nextEl: '.main-slider__btn--next',
      prevEl: '.main-slider__btn--prev'
    },
    pagination: {
      el: '.swiper-pagination-main',
      type: 'bullets',
    },
    slidesPerView: 1,
  })
}

export {initMainSlider};
