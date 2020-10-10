$(function () {
    $('.slider__inner').slick({
        arrows: false,
        dots: true,
        slidesToShow: 1,
        // autoplay: true,
        speed: 1000,
        autoplaySpeed: 800,
    });

    $('.header__menu-btn').on('click', function () {
        $('.menu').slideToggle();
    });
    $('.drop-down > a').on('click', function () {
        $('.drop-down__list').slideToggle();
    });
    $('.drop-down').on('click', function () {
        $('.drop-down__list').toggleClass('active');
    });

});