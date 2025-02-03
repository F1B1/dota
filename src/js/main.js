import './_functions.js';

import { lazyLoad } from './functions/lazyLoad.js';
import { onClickBtn } from './functions/onAnyClick.js';
import { onScrollEvent } from './functions/onScrollEvent.js';
import { setSwipers } from './functions/allSwiper.js';
import { Fancybox } from "@fancyapps/ui";
import { observeBody } from './functions/watchBody.js';
import { applyMask } from './functions/applyMask.js';


window.addEventListener('DOMContentLoaded', () => {
  onScrollEvent();
  onClickBtn();
  setSwipers();
  lazyLoad();
  applyMask('.is-phone');
  observeBody(['no-scrolling', 'is-start', 'loading']);

  Fancybox.bind("[data-fancybox]");

  

});


