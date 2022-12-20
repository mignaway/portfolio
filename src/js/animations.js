var loaded = false
document.addEventListener("DOMContentLoaded", function () {
    var loading_percent = 0;
    (function loop() {
        var rand = Math.random() * 100
        setTimeout(() => {
            if (loading_percent < 100 && !loaded)  {
                document.querySelector('#loader-percent').innerHTML = loading_percent++ + '%'
                loop()
            }
        }, rand)
    }());
})
window.addEventListener('load', function(){
    loaded = true
    document.querySelector('#loader-percent').innerHTML = '100%'
    let loader_fade_opacity = document.querySelector('#loader-fade-opacity')
    var increment = 0.1;
    var opacity = 1;
    var fade = setInterval(function() {
        loader_fade_opacity.style.opacity = opacity
        opacity = opacity - increment;
        if(opacity <= 0){
            clearInterval(fade);
            loader_fade_opacity.style.display = 'none'
        }
    },10)
})

function checkScrollOpacity(scrollY){
    var window_size = window.innerHeight;
    let scroll_bg = document.querySelector('#scroll-bg-fade')
    if (scrollY <= window_size) {
        scroll_bg.style.opacity = scrollY / window_size
    }
    if (scrollY == 0) {
        scroll_bg.style.display = 'none'
    } else {
        scroll_bg.style.display = 'block'
    }
}
function checkScrollFooterEffect(scrollY){
    if (document.querySelector('#footer').offsetTop - scrollY < 0 && window.innerWidth > 800) {
        document.querySelector('#showcase-content').classList.add('mx-20')
    } else {
        document.querySelector('#showcase-content').classList.remove('mx-20')
    }
}