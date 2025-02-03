import Swiper from 'swiper/bundle';

export const setSwipers = () => {
    const smallTablet = matchMedia('(max-width: 768px)');
    const tablet = matchMedia('(max-width: 1024px)');
    const minTablet = matchMedia('(min-width: 1023px)');

    // let sliderThumbs = new Swiper(".slider__thumbs", {
    //     slidesPerView: 'auto',
    //     freeMode: true,
    //     watchSlidesProgress: true,
    //     breakpoints: {
    //         320: {
    //             spaceBetween: 4,
    //         },
    //         768: {
    //             spaceBetween: 10,
    //         },
    //     },
    //   });
    let sliderThumbs = new Swiper(".slider__thumbs", {
        slidesPerView: 'auto',
        freeMode: true,
        watchSlidesProgress: true,
        breakpoints: {
            320: {
                spaceBetween: 4,
            },
            768: {
                spaceBetween: 10,
            },
        },
    });

    new Swiper('.slider__swiper', {
        slidesPerView: 'auto',
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        initialSlide: 2,
        loop: true,
        autoplay: {
            delay: 5000,
        },
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 3,
            slideShadows: true
        },
        breakpoints: {
            320: {
                spaceBetween: 12,
            },
            768: {
                spaceBetween: 36,
            },
            1920: {
                spaceBetween: 56,
            },
        },
    });

    new Swiper('.preview__swiper', {
        loop: true,
        spaceBetween: 30,
        effect: "fade",
        autoplay: {
            delay: 6000,
        },
        pagination: {
            el: '.preview__pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + '0' + (index + 1) + "</span>";
            },
        },
    });

    new Swiper('.advantages__swiper', {
        slidesPerView: 'auto',
        centeredSlides: true,
        breakpoints: {
            320: {
                spaceBetween: 12,
                initialSlide: 0,
            },
            768: {
                initialSlide: 1,
                spaceBetween: 36,
            },
            1920: {
                initialSlide: 1,
                spaceBetween: 56,
            },
        }
    });

    new Swiper('.reviews__swiper', {
        slidesPerView: 'auto',
        spaceBetween: 8,
        autoplay: {
            delay: 6000,
        },

        pagination: {
            el: '.reviews__pagination',
            clickable: true,
            type: 'custom',
            renderCustom: function (swiper, current, total) {
                let currentNum = current >= 10 ? current : `0${current}`;
                let totalNum = total >= 10 ? total : `0${total}`;

                return `${currentNum} / ${totalNum}`;
            }
        },
        navigation: {
            nextEl: '.reviews__next',
            prevEl: '.reviews__prev',
        }
    });

    new Swiper('.discount__swiper', {
        slidesPerView: 'auto',
        spaceBetween: 8,
        autoplay: {
            delay: 6000,
        },

        pagination: {
            el: '.discount__pagination',
            clickable: true,
            type: 'custom',
            renderCustom: function (swiper, current, total) {
                let currentNum = current >= 10 ? current : `0${current}`;
                let totalNum = total >= 10 ? total : `0${total}`;

                return `${currentNum} / ${totalNum}`;
            }
        },
        navigation: {
            nextEl: '.discount__next',
            prevEl: '.discount__prev',
        }
    });

    new Swiper('.modal-card__swiper', {
        slidesPerView:'auto',
        loop: true,
        spaceBetween: 30,
        effect: "fade",
        // autoplay: {
        //     delay: 6000,
        // },
        pagination: {
            el: '.modal-card__pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + '0' + (index + 1) + "</span>";
            },
        },
    });

    new Swiper('.similar__swiper', {
        slidesPerView: 'auto',
        spaceBetween: 8,
        autoplay: {
            delay: 6000,
        },

        pagination: {
            el: '.similar__pagination',
            clickable: true,
            type: 'custom',
            renderCustom: function (swiper, current, total) {
                let currentNum = current >= 10 ? current : `0${current}`;
                let totalNum = total >= 10 ? total : `0${total}`;

                return `${currentNum} / ${totalNum}`;
            }
        },
        navigation: {
            nextEl: '.similar__next',
            prevEl: '.similar__prev',
        }
    });

    new Swiper('.like-card__swiper', {
        slidesPerView: 'auto',
        spaceBetween: 8,
        navigation: {
            nextEl: '.like-card__next',
            prevEl: '.like-card__prev',
        }
    });

    new Swiper('.tabs__swiper', {
        loop: true,
        spaceBetween: 30,
        effect: "fade",
        autoplay: {
            delay: 6000,
        },
        pagination: {
            el: '.tabs__pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + '0' + (index + 1) + "</span>";
            },
        },
    });

    new Swiper('.certificate__swiper', {
        slidesPerView: 'auto',
        centeredSlides: true,
        breakpoints: {
            320: {
                spaceBetween: 8,
            },
            768: {
                spaceBetween: 24,
            },
            1920: {

                spaceBetween: 36,
            },
        }
    });

    const navSubmenu = document.querySelectorAll('.nav__submenu');
    const eventsList = document.querySelectorAll('.events__swiper');
    let necessitySwiper = null;
    let teamSwiper = null;
    let eventsSwiper = [];
    let specialSwiper = null;
    let comfortSwiper = null;
    let lookSwiper = null;
    let uniqueSwiper = null

    const startResizeFunc = () => {
        if (tablet.matches) {
            lookSwiper = new Swiper('.look__swiper', {
                slidesPerView: 'auto',
                spaceBetween: 4,
            });
            necessitySwiper = new Swiper('.necessity__swiper', {
                slidesPerView: 'auto',  
                spaceBetween: 8,
            });

            teamSwiper = new Swiper('.team__swiper', {
                slidesPerView: 'auto',
                spaceBetween: 8,
            });

            uniqueSwiper = new Swiper('.unique__images', {
                slidesPerView: 'auto',
                spaceBetween: 8,
            });

        } else {
            if (necessitySwiper) {
                necessitySwiper.destroy();
                necessitySwiper = null;
            }
            if (teamSwiper) {
                teamSwiper.destroy();
                teamSwiper = null;
            }
            if (lookSwiper) {
                lookSwiper.destroy();
                lookSwiper = null;
            }
            if(uniqueSwiper) {
                uniqueSwiper.destroy();
                uniqueSwiper = null;
            }
        }

        if (smallTablet.matches) {
            eventsList.forEach(item => {
                eventsSwiper.push(new Swiper(item, {
                    slidesPerView: 'auto',
                    spaceBetween: 8,
                }));
            });
            specialSwiper = new Swiper('.special__swiper', {
                slidesPerView: 'auto',
                spaceBetween: 8,
            });
            comfortSwiper = new Swiper('.comfort__swiper', {
                slidesPerView: 'auto',
                spaceBetween: 8,
            });
        } else {
            eventsSwiper.forEach((item, i) => {
                item.destroy();
            });
            eventsSwiper = [];
            if (specialSwiper) {
                specialSwiper.destroy();
                specialSwiper = null;
            }
            if (comfortSwiper) {
                comfortSwiper.destroy();
                comfortSwiper = null;
            }
        }
    };

    startResizeFunc();


    tablet.addEventListener('change', () => {
        if (tablet.matches) {
            necessitySwiper = new Swiper('.necessity__swiper', {
                slidesPerView: 'auto',
                spaceBetween: 8,
            });
            teamSwiper = new Swiper('.team__swiper', {
                slidesPerView: 'auto',
                spaceBetween: 8,
            });
            lookSwiper = new Swiper('.look__swiper', {
                slidesPerView: 'auto',
                spaceBetween: 4,
            });
            uniqueSwiper = new Swiper('.unique__images', {
                slidesPerView: 'auto',
                spaceBetween: 8,
            });
        } else {
            if (necessitySwiper) {
                necessitySwiper.destroy();
                necessitySwiper = null;
            }
            if (teamSwiper) {
                teamSwiper.destroy();
                teamSwiper = null;
            }
            if (lookSwiper) {
                lookSwiper.destroy();
                lookSwiper = null;
            }
            if(uniqueSwiper) {
                uniqueSwiper.destroy();
                uniqueSwiper = null;
            }
        }
    });

    smallTablet.addEventListener('change', () => {
        if (smallTablet.matches) {
            eventsList.forEach(item => {
                eventsSwiper.push(new Swiper(item, {
                    slidesPerView: 'auto',
                    spaceBetween: 8,
                }));
            });

            specialSwiper = new Swiper('.special__swiper', {
                slidesPerView: 'auto',
                spaceBetween: 8,
            });
            comfortSwiper = new Swiper('.comfort__swiper', {
                slidesPerView: 'auto',
                spaceBetween: 8,
            });
        } else {
            eventsSwiper.forEach((item, i) => {
                item.destroy();
            });
            eventsSwiper = [];
            if (specialSwiper) {
                specialSwiper.destroy();
                specialSwiper = null;
            }
            if (comfortSwiper) {
                comfortSwiper.destroy();
                comfortSwiper = null;
            }
        }
    });
};
