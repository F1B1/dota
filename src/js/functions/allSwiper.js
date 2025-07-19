import Swiper from 'swiper/bundle';

export const setSwipers = () => {
    const smallTablet = matchMedia('(max-width: 768px)');
    const tablet = matchMedia('(max-width: 1024px)');
    const minTablet = matchMedia('(min-width: 1023px)');
    
    
    const reviewsSwiper = new Swiper('.reviews__swiper', {
        slidesPerView: 4.1,
        spaceBetween: 16,
        grid: {
            rows: 2,
            fill: 'row'
        },
        pagination:{
            el: '.reviews__pagination',
            clickable: true
        },
        breakpoints:{
            320:{
                slidesPerView: 1
            },
            768:{
                slidesPerView: 2
            },
            1024:{
                slidesPerView: 2.5
            },
            1460:{
                slidesPerView: 3
            },
            1600:{
                slidesPerView: 4.1
            }
        }
    })
  


    let previewSwiper = null

    const startResizeFunc = () => {
        if (tablet.matches) {
            previewSwiper = new Swiper('.preview__swiper',{
                slidesPerView: 'auto',
                spaceBetween: 8,
                pagination:{
                    el: '.preview__pagination',
                    clickable: true
                }
            })
        } else {
            if (previewSwiper) {
                previewSwiper.destroy();
                previewSwiper = null;
            }

        }
    };

    startResizeFunc();


    tablet.addEventListener('change', () => {
        if (tablet.matches) {
            previewSwiper = new Swiper('.preview__swiper',{
                slidesPerView: 'auto',
                spaceBetween: 8,
                pagination:{
                    el: '.preview__pagination',
                    clickable: true
                }
            })
        } else {
            if (previewSwiper) {
                previewSwiper.destroy();
                previewSwiper = null;
            }

        }
    });

};
