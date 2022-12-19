const WORKS_DATA =  [
    {
        name: 'Sorting Algorithm Visualizer',
        type: 'Website + Design',
        description: 'Sorting Algorithm Visualizer is a website where you can test and see what most sorting algorithms do. It is possible to adjust the speed of sorting and the size of the input so that you can study the algorithm to your liking or even simply as a matter of visual relaxation.',
        hex_color: '#EB3B50',
        main_preview_url: 'src/assets/sorting-data-visualizer/sorting-data-visualizer-preview.webp',
        github_link: 'github.com/mignaway/sorting-algorithm-visualizer',
        animated_logo_url: 'src/assets/sorting-data-visualizer/sorting-data-visualizer-logo.gif',
        website_preview: 'src/assets/sorting-data-visualizer/sorting-data-visualizer_website_preview.png',
        website_link: 'https://mignaway.github.io/sorting-algorithm-visualizer/'
    },
    {
        name: 'Epub Reader',
        type: 'App + Design',
        description: 'EpubReader is an ElectronJS desktop application made for reading .epub format files. It has an API Dictionary integration for letting people know the meaning of what is being read. The main reason i started this project is because I couldn\'t find online epub readers with a design I liked, hope you can enjoy it.',
        hex_color: '#d4a62f',
        main_preview_url: 'src/assets/epubreader/epubreader_preview.webp',
        github_link: 'github.com/mignaway/EpubReader',
        animated_logo_url: 'src/assets/epubreader/epubreader-logo.gif',
        website_preview: 'src/assets/epubreader/epubreader_website_preview.png',
        website_link: 'https://mignaway.github.io/epub-reader-website/'
    }
]
var current_preview_index = 0
$(window).on('load', function () {
    loadPreviewAndUpdateIndex(current_preview_index);
    $('#showcase-arrow-left').on('click', function(){
        if (current_preview_index - 1 >= 0) loadPreviewAndUpdateIndex(current_preview_index - 1);
    })
    $('#showcase-arrow-right').on('click', function () {
        if (current_preview_index + 1 < WORKS_DATA.length) loadPreviewAndUpdateIndex(current_preview_index + 1 );
    })
    $('#showcase-main-preview').on('click', function(){
        $('html, body').animate({ scrollTop: $(window).height() }, 500);
    })
})

function loadPreviewAndUpdateIndex(index){
    const data = WORKS_DATA[index];

    $('#showcase-main-preview').removeClass('showcase-custom-slide-in-right')
    $('#showcase-main-preview').removeClass('showcase-custom-slide-in-left')

    if (index > current_preview_index) { 
        $('#showcase-main-preview').addClass('showcase-custom-slide-out-right') 
    } else if(index < current_preview_index) { 
        $('#showcase-main-preview').addClass('showcase-custom-slide-out-left')  
    }

    $('#showcase-main-preview').attr('src',data.main_preview_url)
    $('#showcase-index').text(index+1)
    $('#showcase-name').text(data.name)
    $('#showcase-type').text(data.type)
    $('#showcase-hex-color').attr('class','w-[10px] h-[10px] rounded-full bg-[' + data.hex_color + ']')
    $('#showcase-description').text(data.description)
    $('#showcase-github-link').attr('href', 'https://' + data.github_link)
    $('#showcase-github-link').text(data.github_link)
    $('#showcase-animated-logo').attr('src', data.animated_logo_url)
    $('#showcase-website-image').attr('src', data.website_preview)
    $('#showcase-website-link').attr('href', data.website_link)

    if (index > current_preview_index) {
        $('#showcase-main-preview').addClass('showcase-custom-slide-in-left')
    } else if (index < current_preview_index) {
        $('#showcase-main-preview').addClass('showcase-custom-slide-in-right')
    }
    updateIndexAndArrows(index)
}
function updateIndexAndArrows(index){
    current_preview_index = index
    // RIGHT
    if (index + 1 >= WORKS_DATA.length) {
        $('#showcase-arrow-right').addClass('!opacity-[.1]')
    } else {
        $('#showcase-arrow-right').removeClass('!opacity-[.1]')
    }
    if (index - 1 < 0) {
        $('#showcase-arrow-left').addClass('!opacity-[.1]')
    } else {
        $('#showcase-arrow-left').removeClass('!opacity-[.1]')
    }
    
}
