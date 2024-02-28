import {initAccordion} from './modules/accordion/init-accordion';
import {initHeaderAccordion} from './modules/header-accordion/init-header-accordion';
import {initCustomSelect} from './modules/custom-select/init-custom-select';
import {initHeader} from './modules/header/init-header';
import {initModals} from './modules/modal/init-modals';
import {initPhoneMask} from './modules/init-phone-mask';
import {initPhoneValidation} from './modules/init-phone-validation';


window.addEventListener('DOMContentLoaded', () => {
  Fancybox.bind('[data-fancybox]', {

  });

  window.addEventListener('load', () => {
    initHeader();
    initHeaderAccordion();
    initModals();
    initCustomSelect();
    initAccordion();
    initPhoneMask();
    initPhoneValidation();
  });
});
