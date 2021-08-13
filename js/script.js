$(document).ready(function(){
    $('.header__btn').click(function(event){
        $('.header__btn, .header__nav, .header__row, .header__item, .header__btn3, .header__logo, .header').toggleClass('active');
    });
})

new Swiper('.image-slider', {
    slidesPerView: 3,
    spaceBetween: -300,
    centeredSlides: true,
    loop: true,
    looperSlide: 3,
    breakpoints:{
        320:{
            slidesPerView: 1,
            looperSlide: 1,
            spaceBetween: 0,
        },
        921:{
            slidesPerView: 3,
            looperSlide: 3,
            spaceBetween: 0,
        },
        1280:{
            slidesPerView: 3,
            looperSlide: 3,
            spaceBetween: 0,
        },
        1674:{
            slidesPerView: 3,
            looperSlide: 3,
            spaceBetween: 35, 
        }, 
    },
});

new Swiper('.img-slider',{
    slidesPerView: 4,
    loop: true,
    looperSlide: 4,
    breakpoints:{
        320:{
            slidesPerView: 1,
            looperSlide: 1,
        },
        880:{
            slidesPerView: 3,
            looperSlide: 3, 
        },
        1122:{
            slidesPerView: 4,
            looperSlide: 4,    
        },
    },
});