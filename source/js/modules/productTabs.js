const productTabs = ()=> {
  const tabsHeader = document.querySelector('.product-tabs__header');
  const tabBody = document.querySelectorAll('.tab-b:not(:first-child)');

  if (!tabsHeader) {
    return
  }

  tabBody.forEach((item)=> {
    item.style.display = 'none';
  })

  tabsHeader.addEventListener('click', (evt)=> {
    if (evt.target.className == 'tab-h') {
      let dataTab = evt.target.getAttribute('data-tab');
      let tabsB = document.querySelectorAll('.tab-b');
      let tabsH = document.querySelectorAll('.tab-h');

      tabsH.forEach((item)=> {
        item.classList.remove('tab-h--active');
      })

      evt.target.classList.add('tab-h--active');

      tabsB.forEach((item,index) => {
        if (dataTab == index) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      })
    }
  })
}

export {productTabs}
