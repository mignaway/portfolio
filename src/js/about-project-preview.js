$(window).on('load', function (){
    $('.project-preview').on('mousemove', function (e) {
        var content = $(this).find('.project-preview-content');
        content.css({
            'transform': `translate(${e.pageX - $(this).offset().left - (content.width() / 2)}px, ${e.pageY - $(this).offset().top - (content.height() - 15)}px)` })
    })
    $('.project-preview').on('mouseenter', function () { $(this).find('.project-preview-content').removeClass('!hidden')})
    $('.project-preview').on('mouseleave', function () { $(this).find('.project-preview-content').addClass('!hidden') })
})