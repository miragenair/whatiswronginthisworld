$(function() {
    var nav = $(".header");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 50) {
            nav.removeClass('header').addClass("header-alt");
        } else {
            nav.removeClass("header-alt").addClass('header');
        }
    });
});