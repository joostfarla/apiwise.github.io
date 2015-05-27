var anchorScroll = function () {
    var root = $('html, body');

    $('a[href*=#]:not([href=#])').click(function() {
        root.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });
};

$(function() {
    anchorScroll();
});
