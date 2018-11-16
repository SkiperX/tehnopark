$(document).ready(function() {
    if ($("body").width() > 991) {
        if ($('.fixed-header').length == 0) {
            $("body").prepend(
                $(".stycky-wrap")
                    .clone()
                    .addClass("fixed-header")
                //.css("padding-right", window.innerWidth - document.documentElement.clientWidth)
            );
        }

        $(window).scroll(function () {
            if ($(window).scrollTop() > 500) {
                $(".fixed-header").addClass("sticky");
                $(".blog-right, .--sticky-col, .product-right, .cart-col").addClass("header-fix");
                $(".scroll-top").fadeIn();

            } else {
                $(".fixed-header").removeClass("sticky");
                $(".blog-right, .--sticky-col, .product-right, .cart-col").removeClass("header-fix");
                $(".scroll-top").fadeOut();

            }
        });
        $(".scroll-top").on('click', function() {
            $("html:not(:animated),body:not(:animated)").animate({scrollTop: 0}, 600);
            return false;
        });

        
    }
    
    
 
});
if (document.fonts) {
    document.fonts.load("bold 16px Lato", "b").then(function() {
       
        $("body").css("opacity", "1").addClass("body-ready");
    });
}


$(window).load(function() {
    $("body").css("opacity", "1");

});

//добавляет подчеркивание в топменю
function tabBorder(e) {
    //e = e.parent();
    var b = e.outerWidth(true),
        c = (e.outerWidth(true) - b) / 2,
        d = e.position().left;
    $(".border").css("left", d + c).css("width", b)
}

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
function setWorkListHeight() {
    if ($(".fixed-header.header-wrap .work-list.ps").length) {
        return
    }
    var elemHeight = $(".fixed-header.header-wrap .work-list").outerHeight();
    var elemOffset = $(".fixed-header.header-wrap .work-list").offset().top - $(window).scrollTop();
    var windowHeight = $(window).height();
    console.log(elemHeight + elemOffset)

    if(elemHeight + elemOffset > windowHeight) {
        var itogHeight = windowHeight - elemOffset - 30;
        $(".fixed-header.header-wrap .work-list").outerHeight(itogHeight);
        var ps = new PerfectScrollbar('.fixed-header.header-wrap .work-list', {
            suppressScrollX: true
        });
    }
}

// галерея в rent
$(".rent-gallery__gallery-item").on("click", function() {
    var clicked = $(this);
    var perentCliked = clicked.closest(".tab-pane");
    // вставка картинки
    var fullSize = clicked.find("img").data("full");
    perentCliked.find(".rent-gallery__tab-view-item img").attr("src", fullSize);
    perentCliked.find(".rent-gallery__gallery-item").removeClass("rent-gallery__gallery-item_selected");
    clicked.addClass("rent-gallery__gallery-item_selected");
    // вставка title
    var tbig = clicked.find("img").data("tbig");
    var tsmall = clicked.find("img").data("tsmall");
    var titleView = perentCliked.find(".rent-gallery__title-view-item");
    titleView.html("<b>" + tbig + "</b> — " + tsmall);
});


if ($(".course__programms")) {
    $(".course__programms-title").on("click", function(e) {
        $(".course__programms-content").slideToggle();
        if ($(".course__title-arrow_expand").is(":visible")) {
            $(".course__title-arrow_expand").css("display", "none");
            $(".course__title-arrow_collapse").css("display", "block");
        } else {
            $(".course__title-arrow_expand").css("display", "block");
            $(".course__title-arrow_collapse").css("display", "none");
        }
    });

    var sublist = $(".course__programms-sublist");
    function checkSublist() {
        var k = false ;
        sublist.each(function(index, el) {
            if ($(this).css("display") === "block") {
                return k = true;
            } else {
                return k = false;
            }
        });
        if (k) {
            $(".course__button-expand_collapse").css("display", "block");
            $(".course__button-expand_expand").css("display", "none");
        } else {
            $(".course__button-expand_collapse").css("display", "none");
            $(".course__button-expand_expand").css("display", "block");
        }
    }
    $(".course__button-expand_expand").on("click", function(e) {
        sublist.slideDown();
        $(this).css("display", "none");
        $(".course__button-expand_collapse").css("display", "block");
        $(".course__programms-item").addClass("course__programms-item_open")
    });
    $(".course__button-expand_collapse").on("click", function(e) {
        sublist.slideUp();
        $(this).css("display", "none");
        $(".course__button-expand_expand").css("display", "block");
        $(".course__programms-item").removeClass("course__programms-item_open")
    });
    $(".course__programms-item").on("click", function(e) {
        $(this).children(".course__programms-sublist").slideToggle();
        $(this).toggleClass("course__programms-item_open");
        checkSublist();
    });
}

if ($(".course-registry")) {
    if ($(".course-registry__checkbox_sale-two input").is(":checked")) {
        $(".course-registry__wrapper-quantity").show();
    } else {
        $(".course-registry__wrapper-quantity").hide();
    }
    $(".course-registry__checkbox_sale-two").on("click", function(e) {
        if ($(".course-registry__checkbox_sale-two input").is(":checked")) {
            $(".course-registry__wrapper-quantity").show();
        } else {
            $(".course-registry__wrapper-quantity").hide();
        }
    });
}

var workshopItem = $(".workshop__item");

workshopItem.on("click", function(event) {
    event.preventDefault();
    if ($(this).hasClass("workshop__item_active")) {
        workshopItem.siblings(".workshop__sublist").fadeOut();
        $(this).removeClass("workshop__item_active");
    } else {
        workshopItem.removeClass("workshop__item_active");
        workshopItem.siblings(".workshop__sublist").fadeOut();
        $(this).siblings(".workshop__sublist").fadeIn();
        $(this).addClass("workshop__item_active");
        
    }
});