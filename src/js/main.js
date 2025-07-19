import './_functions.js';

import { Fancybox } from "@fancyapps/ui";

import { lazyLoad } from './functions/lazyLoad.js';
import { onClickBtn } from './functions/onAnyClick.js';
import { onScrollEvent } from './functions/onScrollEvent.js';
import { setSwipers } from './functions/allSwiper.js';
import { observeBody } from './functions/watchBody.js';
import { applyMask } from './functions/applyMask.js';
import { rangeInput } from './functions/rangeInput.js';
import { dropdownSelect } from './functions/dropdownSelect.js';

function togglePreviewActive (){
  const slides = document.querySelectorAll('.preview__swiper .swiper-slide')

  slides.forEach(slide => {
    slide.addEventListener("click", function(e) {

      slides.forEach(element=> {
        element.classList.remove('active')
      })

      slide.classList.add('active')
    });
  });
}


window.addEventListener('DOMContentLoaded', () => {
  onScrollEvent();
  onClickBtn();
  setSwipers();
  lazyLoad();
  applyMask('.is-phone');
  observeBody(['no-scrolling', 'is-start', 'loading']);
  rangeInput()
  dropdownSelect()

  Fancybox.bind("[data-fancybox]");

  if(innerWidth > 1024){
    togglePreviewActive()
  }

  window.addEventListener('resize',()=>{
    if(innerWidth > 1024){
      togglePreviewActive()
    }
  })

});

