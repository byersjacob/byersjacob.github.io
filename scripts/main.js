

$(window).on('load, resize', function mobileViewUpdate() {
    var viewportWidth = $(window).width();
    if (viewportWidth < 600) {
        $(".logoimg").removeClass("mr-auto").addClass("mx-auto");
    }
});
