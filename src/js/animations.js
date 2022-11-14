var loaded = false
$(document).ready(function () {
    var loading_percent = 0;
    (function loop() {
        var rand = Math.random() * 100
        setTimeout(() => {
            if (loading_percent < 100 && !loaded)  {
                $('#loader-percent').text(loading_percent++ + '%')
                loop()
            }
        }, rand)
    }());
})
$(window).on('load', function(){
    loaded = true
    $('#loader-percent').text('100%')
    $('#loader-fade-opacity').animate({ opacity: 0 }, 500 , function() {
        $('#loader-fade-opacity').hide()
    });
    $(window).on('scroll', function(){
        if (location.pathname == '/index.html' || location.pathname == '/') {
            checkScrollFooterEffect();
            checkScrollOpacity();
        }
    })
})

function checkScrollOpacity(){
    var st = $(window).scrollTop();
    var window_size = $(window).height();
    if (st <= window_size) {
        $('#scroll-bg-fade').css({ 'opacity': st / window_size })
    }
    if (st == 0) {
        $('#scroll-bg-fade').hide();
    } else {
        $('#scroll-bg-fade').show();
    }
}
function checkScrollFooterEffect(){
    if ($('#footer').position().top - $(window).scrollTop() < 0 && $(window).width() > 800) {
        $('#showcase-content').addClass('mx-20')
    } else {
        $('#showcase-content').removeClass('mx-20')
    }
}