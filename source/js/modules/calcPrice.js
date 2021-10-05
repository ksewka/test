const calcPrice = ()=> {
  const calc = document.querySelector('.calc');
  const colors = document.querySelectorAll('.colors__item');
  const engineVolumes = document.querySelectorAll('.engine__item')
  const mods = document.querySelectorAll('.mod__item');

  if (!calc) {
    return
  }

  function getTotalPrice (a, b, c) {
    totalPrice = a+b+c;
    const formatTotalPrice = new Intl.NumberFormat('ru-RU').format(totalPrice);
    document.querySelector('.price__sum').textContent = formatTotalPrice + ' P.';
  }

  // устанавливаем значения по умолчанию
  colors[0].classList.add('colors__item--active');
  engineVolumes[0].classList.add('engine__item--active');
  mods[0].classList.add('mod__item--active');

  let totalPrice,
      colorPrice = Number.parseInt(colors[0].getAttribute('data-price')),
      engineVolPrice = Number.parseInt(engineVolumes[0].getAttribute('data-price')),
      modPrice = Number.parseInt(mods[0].getAttribute('data-price'));

  getTotalPrice(colorPrice, engineVolPrice, modPrice);


  colors.forEach((item)=> {
    item.addEventListener('click', ()=> {
      let colorsItem = document.querySelectorAll('.colors__item');
      colorsItem.forEach((it)=> {
        it.classList.remove('colors__item--active');
      })
      item.classList.toggle('colors__item--active');
      colorPrice = Number.parseInt(item.getAttribute('data-price'));
      getTotalPrice(colorPrice, engineVolPrice, modPrice);
    })
  })

  engineVolumes.forEach((item)=> {
    item.addEventListener('click', (e)=> {
      let engineItem = document.querySelectorAll('.engine__item');
      engineItem.forEach((it)=> {
        it.classList.remove('engine__item--active');
      })
      item.classList.toggle('engine__item--active');
      engineVolPrice = Number.parseInt(item.getAttribute('data-price'));
      getTotalPrice(colorPrice, engineVolPrice, modPrice);
    })
  })

  mods.forEach((item)=> {
    item.addEventListener('click', (e)=> {
      let modItem = document.querySelectorAll('.mod__item--active');
      modItem.forEach((it)=> {
        it.classList.remove('mod__item--active');
      })
      item.classList.toggle('mod__item--active');
      modPrice = Number.parseInt(item.getAttribute('data-price'));
      getTotalPrice(colorPrice, engineVolPrice, modPrice);
    })
  })
}

export {calcPrice}
