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
window.addEventListener("load", function () { 
    loadPreviewAndUpdateIndex(current_preview_index);
    const arrow_left = document.querySelector('#showcase-arrow-left');
    const arrow_right = document.querySelector('#showcase-arrow-right');
    const main_preview = document.querySelector('#showcase-main-preview');

    arrow_left.addEventListener('click', function(){
        if (current_preview_index - 1 >= 0) loadPreviewAndUpdateIndex(current_preview_index - 1);
    })
    arrow_right.addEventListener('click', function () {
        if (current_preview_index + 1 < WORKS_DATA.length) loadPreviewAndUpdateIndex(current_preview_index + 1 );
    })
    main_preview.addEventListener('click', function(){
        animateMainPreviewScroll()
    })
})

function animateMainPreviewScroll(){
    window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth"
    })
}

function loadPreviewAndUpdateIndex(index){
    const data = WORKS_DATA[index];
    const main_preview = document.querySelector('#showcase-main-preview');


     main_preview.classList.remove('showcase-custom-slide-in-right')
     main_preview.classList.remove('showcase-custom-slide-in-left')

    if (index > current_preview_index) { 
        main_preview.classList.add('showcase-custom-slide-out-right') 
    } else if(index < current_preview_index) { 
        main_preview.classList.add('showcase-custom-slide-out-left')  
    }

    document.querySelector('#showcase-main-preview').setAttribute('src',data.main_preview_url)
    document.querySelector('#showcase-index').innerHTML = index+1
    document.querySelector('#showcase-name').innerHTML = data.name
    document.querySelector('#showcase-type').innerHTML = data.type
    document.querySelector('#showcase-hex-color').setAttribute('class','w-[10px] h-[10px] rounded-full bg-[' + data.hex_color + ']')
    document.querySelector('#showcase-description').innerHTML = data.description
    document.querySelector('#showcase-github-link').setAttribute('href', 'https://' + data.github_link)
    document.querySelector('#showcase-github-link').innerHTML = data.github_link
    document.querySelector('#showcase-animated-logo').setAttribute('src', data.animated_logo_url)
    document.querySelector('#showcase-website-image').setAttribute('src', data.website_preview)
    document.querySelector('#showcase-website-link').setAttribute('href', data.website_link)

    if (index > current_preview_index) {
        main_preview.classList.add('showcase-custom-slide-in-left')
    } else if (index < current_preview_index) {
        main_preview.classList.add('showcase-custom-slide-in-right')
    }
    updateIndexAndArrows(index)
}
function updateIndexAndArrows(index){
    const arrow_left = document.querySelector('#showcase-arrow-left');
    const arrow_right = document.querySelector('#showcase-arrow-right');
    current_preview_index = index
    // RIGHT
    if (index + 1 >= WORKS_DATA.length) {
        arrow_right.classList.add('!opacity-[.1]')
    } else {
        arrow_right.classList.remove('!opacity-[.1]')
    }
    if (index - 1 < 0) {
        arrow_left.classList.add('!opacity-[.1]')
    } else {
        arrow_left.classList.remove('!opacity-[.1]')
    }
    
}
