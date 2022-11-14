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
    const lastUrlSegment = getLastUrlSegment(window.location.href)
    $(window).on('scroll', function(){
        if (lastUrlSegment == 'index.html' || lastUrlSegment == null) {
            console.log("active")
            checkScrollFooterEffect();
            checkScrollOpacity();
        }
    })
})

function getLastUrlSegment(url) {
    return new URL(url).pathname.split('/').filter(Boolean).pop();
}

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
    console.log("called")
    if ($('#footer').position().top - $(window).scrollTop() < 0 && $(window).width() > 800) {
        console.log("passed")
        $('#showcase-content').addClass('mx-20')
    } else {
        console.log("not passed")
        $('#showcase-content').removeClass('mx-20')
    }
}