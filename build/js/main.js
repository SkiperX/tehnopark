
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

$(".header-menu__link").hover (function(e) { 
    var marginLeftContainer = $(".header__big-container").css("margin-left");
    $(".header-menu__drop-level").css("margin-left", "-" + marginLeftContainer);
    $(".header-menu__drop-level").css("margin-right", "-" + marginLeftContainer);
});

$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
    dots: true
});
$('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    centerMode: true,
    focusOnSelect: true,
    vertical: true
});

var headerHeight = $('.header').height();
$('.banner__slide').css('padding-top', headerHeight + 70);