import {initAccordion} from './modules/accordion/init-accordion';
import {initHeaderAccordion} from './modules/header-accordion/init-header-accordion';
import {initCustomSelect} from './modules/custom-select/init-custom-select';
import {initHeader} from './modules/header/init-header';
import {initModals} from './modules/modal/init-modals';
import {initPhoneMask} from './modules/init-phone-mask';
import {initPhoneValidation} from './modules/init-phone-validation';
import {initProductSlider} from './modules/slider/init-product-slider';


window.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initHeaderAccordion();
  initModals();
  Fancybox.bind('[data-fancybox]', {

  });

  window.addEventListener('load', () => {
    initCustomSelect();
    initAccordion();
    initPhoneMask();
    initPhoneValidation();
    initProductSlider();
  });
});
