const initProductSliders = ()=> {
  const productSliderContainer = document.querySelectorAll('.product-container');

  if (!productSliderContainer) {
    return;
  }

  productSliderContainer.forEach((item)=> {
    const prevBtn = item.querySelector('.product-tabs__btn--prev');
    const nextBtn = item.querySelector('.product-tabs__btn--next');
    let productSwiper = new Swiper(item, {
      loop: true,
      direction: 'horizontal',
      navigation: {
        nextEl: nextBtn,
        prevEl: prevBtn,
      },
      slidesPerView: 'auto',
      spaceBetween: 0,
    })
  })

}

export {initProductSliders}
