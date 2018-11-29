
if (document.fonts) {
    document.fonts.load("bold 16px Lato", "b").then(function() {
       
        $("body").css("opacity", "1").addClass("body-ready");
    });
}


$(window).load(function() {
    $("body").css("opacity", "1");

});

//превращает кнопку в лоадер
function addLoaderInBtn(e) {
    $(e).css("color", "transparent").html($(e).html() + "<div class='loader'>" +
        "<span></span>" +
        "<span></span>" +
        "<span></span>" +
        "</div>");
}
function removeLoaderInBtn(e) {
    $(e).css("color", "").find(".loader").fadeOut(function() {
        $(e).find(".loader").remove();
    });
}
//делает высоту элементов одинаковой
function setHeight($e) {
    var h = 0;
    function a($e) {
        $($e).each(function(e) {
            if ($(this).outerHeight(true) > h) {
                h = $(this).outerHeight(true);
            }
        });
        $($e).outerHeight(h);
    }
    a($e);
    $(window).resize(function () {
        a($e);
    });
}

$(".gamburger").on("click", function(e) { 
    $(this).toggleClass("open"); 
    $(".header-menu__row").slideToggle(); 
});
$(".header-menu__search").on("click", function(e) { 
    $(this).addClass("header-menu__search_active");
    $(".header-menu__close-search").show();
    if ($(".gamburger").is(':hidden')) {
        $(".header-menu__item").hide();
    } else {
        $(".gamburger").hide();
        $(".gamburger").removeClass("open");
        $(".header-menu__row").slideUp(); 
    }
});

var closedSearch = function() {
    $(".header-menu__search").removeClass("header-menu__search_active");
    $(".header-menu__close-search").hide();
    $(".header-menu__item").show();
    if( window.screen.width <= 991 ){
        $(".gamburger").show();
    }
}

$(".header-menu__close-search").on("click", function(e) { 
    closedSearch();
});

$(document).mouseup(function (e) { 
    var container = $(".header-menu__search"); 
    if (container.has(e.target).length === 0) { 
        closedSearch();
    } 
});

var marginLeftContainer = parseFloat($(".header__big-container").css("margin-left"));

$(".header-menu__link").hover (function(e) { 
    $(".header-menu__drop-level").css("margin-left", "-" + marginLeftContainer + "px");
    $(".header-menu__drop-level").css("margin-right", "-" + marginLeftContainer + "px");
});

$(".banner__slider-nav").css("margin-right", marginLeftContainer + 15);

$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnFocus: false,
    pauseOnHover: false,
    draggable: false
});

var headerHeight = $('.header').height();
$('.banner__slide').css('padding-top', headerHeight + 70);

var navItems = $('.banner__nav-item');

navItems.on('click', function(e) {
    var indexSlide = $(this).index();
    $('.slider-for').slick('slickGoTo', indexSlide,  false);
});

$('.slider-for').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    navItems.removeClass('banner__nav-item_active');
    $(navItems[nextSlide]).addClass('banner__nav-item_active');
});

$('.about-work__header').on('click', function(e) {
    scrollHeight = $('.banner').height();
    $('html, body').animate({ scrollTop: scrollHeight - 45}, 500); 
});

$('.footer-top__title').on('click', function(e) {
    $(".headlines").slideToggle();  
    $(this).toggleClass('footer-top__title_close');
});

var workItem = $(".about-work__tab-link");
workItem.on('click', function(e) {
    workItem.removeClass("about-work__tab-link_active");
    $(this).addClass("about-work__tab-link_active");
    $('.about-work__tab-link').children(".about-work__tab-content").hide();
    $(this).children(".about-work__tab-content").show();

    var indexItem = $(this).parent().index();
    $(".about-work__progress-line").width((20 * (indexItem)) + "%");
});

if (screen.width <= 991) {
    $('.header-menu__link').on('click', function(e) {
        $(this).next(".header-menu__drop-level").slideToggle();
        $(this).toggleClass('header-menu__link_active');
    });
}

$('.footer__up').click(function (e) {
    e.preventDefault();
    $('body,html').animate({
        scrollTop: 0
    }, 400);
    return false;
});