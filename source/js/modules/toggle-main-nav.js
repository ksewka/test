const toggleMainNav = () => {
  const burger = document.querySelector('.burger'),
        footer = document.querySelector('footer'),
        nav = document.querySelector('.main-nav-wrap'),
        submenu = document.querySelector('.submenu'),
        main = document.querySelector('main'),
        closeBtn = document.querySelector('.submenu__close'),
        subscription = document.querySelector('.subscription');


  if (!burger) {
    return
  }

  const scrollLock = () => {
    main.style.position = 'fixed';
    main.style.top = `-${window.scrollY}px`;
    main.classList.add('main--hide');
  }

  const scrollUnlock = () => {
    main.style.position = '';
    main.style.top = '';
    main.classList.remove('main--hide');
  }

  const toggleNav = ()=> {
    burger.classList.toggle('burger--opened');
    nav.classList.toggle('main-nav-wrap--opened');
    footer.classList.toggle('footer--hide');
    subscription.classList.toggle('subscription--hide');

    if (!main.classList.contains('main--hide')) {
      scrollLock();
    } else {
      scrollUnlock();
    }
  }

  const toggleSubmenu = ()=> {
    burger.classList.remove('burger--opened')
    closeBtn.addEventListener('click', ()=> {
      submenu.classList.remove('submenu--opened');
      footer.classList.add('footer--hide');
      nav.classList.remove('main-nav-wrap--opened');
      footer.classList.remove('footer--hide');
      subscription.classList.remove('subscription--hide');
      scrollUnlock();
    })
    submenu.classList.add('submenu--opened');
    footer.classList.remove('footer--hide');
  }

  if (window.innerWidth < 768) {
    burger.addEventListener('click', toggleNav);
  }
};

export {toggleMainNav};
