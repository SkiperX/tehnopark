
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
    }
    
});
$(".header-menu__close-search").on("click", function(e) { 
    $(".header-menu__search").removeClass("header-menu__search_active");
    $(".header-menu__close-search").hide();
    $(".header-menu__item").show();
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
    $('.about-work__content').toggleClass('about-work__content_active').slideToggle();
    $(this).toggleClass('about-work__header_open');
});

var workItem = $(".about-work__tab-link");
workItem.on('click', function(e) {
    workItem.removeClass("about-work__tab-link_active");
    $(this).addClass("about-work__tab-link_active");
    var indexItem = $(this).parent().index();
    $(".about-work__progress-line").width((20 * (indexItem)) + "%");
});