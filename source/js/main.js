import {iosVhFix} from './utils/ios-vh-fix';
import {initMainSlider} from './modules/main-slider';
import {initProductSliders} from './modules/initProductSliders';
import {productTabs} from './modules/productTabs';
import {calcPrice} from './modules/calcPrice';
import {toggleMainNav} from './modules/toggle-main-nav';
import {smoothScrolling} from './modules/smooth-scrolling';
import {setTimer} from './modules/timer';


// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  iosVhFix();

  // Modules
  // ---------------------------------

  initMainSlider();
  initProductSliders();
  toggleMainNav();
  calcPrice();
  smoothScrolling();
  setTimer();

  window.addEventListener('load', () => {
    productTabs();
  });
});
