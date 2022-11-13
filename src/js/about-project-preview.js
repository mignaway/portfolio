$(window).on('load', function (){
    $('.project-preview').on('mousemove', function (e) {
        console.log("moving")
        // console.log(e.pageY, $(this).offset().top)
        var content = $(this).find('.project-preview-content');
        content.css({
            'transform': `translate(${e.pageX - $(this).offset().left - (content.width() / 2)}px, ${e.pageY - $(this).offset().top - (content.height() - 15)}px)` })
    })
    $('.project-preview').on('mouseenter', function () { console.log("mouse entered"); $(this).find('.project-preview-content').removeClass('!hidden')})
    $('.project-preview').on('mouseleave', function () { console.log("mouse leaved"); $(this).find('.project-preview-content').addClass('!hidden') })
})