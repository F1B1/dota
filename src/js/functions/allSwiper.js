import Swiper from 'swiper/bundle';

export const setSwipers = () => {
    const smallTablet = matchMedia('(max-width: 768px)');
    const tablet = matchMedia('(max-width: 1024px)');
    const minTablet = matchMedia('(min-width: 1023px)');

    // let previweSwiper = new Swiper(".preview__swiper", {
    //     slidesPerView: 'auto'
    //   });
    

  


    let uniqueSwiper = null

    const startResizeFunc = () => {
        if (tablet.matches) {
            // lookSwiper = new Swiper('.look__swiper', {
            //     slidesPerView: 'auto',
            //     spaceBetween: 4,
            // });


        } else {
            // if (necessitySwiper) {
            //     necessitySwiper.destroy();
            //     necessitySwiper = null;
            // }

        }
    };

    startResizeFunc();


    tablet.addEventListener('change', () => {
        if (tablet.matches) {
            // necessitySwiper = new Swiper('.necessity__swiper', {
            //     slidesPerView: 'auto',
            //     spaceBetween: 8,
            // });
        } else {
            // if (necessitySwiper) {
            //     necessitySwiper.destroy();
            //     necessitySwiper = null;
            // }

        }
    });

};
