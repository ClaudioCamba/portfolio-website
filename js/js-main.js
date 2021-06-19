// Website Content
const cldWebsiteInfo = {
    'intro': {

    },
    'portfolio': {
        'samsungcomparisontable': {
            'name': 'Samsung Comparison Table',
            'desc': 'A re-imagined version of the famous hangman game, this game is for two or more players, one player submits a word and the other player(s) must try to guess by suggesting letters, with a limited number of attempts.',
            'liveCta': 'Play',
            'liveCtaLink': 'https://claudiocamba.github.io/Faceman/',
            'learnCta': 'Learn More',
            'modalContent': {
                'imgs': ['', '', '', '']
            }
        },
        'samsungcartabandonment': {
            'name': 'Samsung Cart Abandonment',
            'desc': 'A re-imagined version of the famous hangman game, this game is for two or more players, one player submits a word and the other player(s) must try to guess by suggesting letters, with a limited number of attempts.',
            'liveCta': 'Play',
            'liveCtaLink': 'https://claudiocamba.github.io/Faceman/',
            'learnCta': 'Learn More',
            'modalContent': {
                'imgs': ['', '', '', '']
            }
        },
        'samsungcataffinity': {
            'name': 'Samsung Category Affinity',
            'desc': 'A re-imagined version of the famous hangman game, this game is for two or more players, one player submits a word and the other player(s) must try to guess by suggesting letters, with a limited number of attempts.',
            'liveCta': 'Play',
            'liveCtaLink': 'https://claudiocamba.github.io/Faceman/',
            'learnCta': 'Learn More',
            'modalContent': {
                'imgs': ['', '', '', '']
            }
        },
        'samsungusp': {
            'name': 'Samsung USP',
            'desc': 'A re-imagined version of the famous hangman game, this game is for two or more players, one player submits a word and the other player(s) must try to guess by suggesting letters, with a limited number of attempts.',
            'liveCta': 'Play',
            'liveCtaLink': 'https://claudiocamba.github.io/Faceman/',
            'learnCta': 'Learn More',
            'modalContent': {
                'imgs': ['', '', '', '']
            }
        },
        'targetav': {
            'name': 'Target AV',
            'desc': 'A re-imagined version of the famous hangman game, this game is for two or more players, one player submits a word and the other player(s) must try to guess by suggesting letters, with a limited number of attempts.',
            'liveCta': 'Play',
            'liveCtaLink': 'https://claudiocamba.github.io/Faceman/',
            'learnCta': 'Learn More',
            'modalContent': {
                'imgs': ['', '', '', '']
            }
        },
        'gpmc': {
            'name': 'GPMC',
            'desc': 'A re-imagined version of the famous hangman game, this game is for two or more players, one player submits a word and the other player(s) must try to guess by suggesting letters, with a limited number of attempts.',
            'liveCta': 'Play',
            'liveCtaLink': 'https://claudiocamba.github.io/Faceman/',
            'learnCta': 'Learn More',
            'modalContent': {
                'imgs': ['', '', '', '']
            }
        },
        'portfoliov1': {
            'name': 'Claudio Portfolio V1',
            'desc': 'A re-imagined version of the famous hangman game, this game is for two or more players, one player submits a word and the other player(s) must try to guess by suggesting letters, with a limited number of attempts.',
            'liveCta': 'Play',
            'liveCtaLink': 'https://claudiocamba.github.io/Faceman/',
            'learnCta': 'Learn More',
            'modalContent': {
                'imgs': ['', '', '', '']
            }
        },
        'minagent': {
            'name': 'Minagent',
            'desc': 'A re-imagined version of the famous hangman game, this game is for two or more players, one player submits a word and the other player(s) must try to guess by suggesting letters, with a limited number of attempts.',
            'liveCta': 'Play',
            'liveCtaLink': 'https://claudiocamba.github.io/Faceman/',
            'learnCta': 'Learn More',
            'modalContent': {
                'imgs': ['', '', '', '']
            }
        },
        'faceman': {
            'name': 'Faceman',
            'desc': 'A re-imagined version of the famous hangman game, this game is for two or more players, one player submits a word and the other player(s) must try to guess by suggesting letters, with a limited number of attempts.',
            'liveCta': 'Play',
            'liveCtaLink': 'https://claudiocamba.github.io/Faceman/',
            'learnCta': 'Learn More',
            'modalContent': {
                'imgs': [
                    'assets/projects/faceman/faceman-slide-1.jpg',
                    'assets/projects/faceman/faceman-slide-2.jpg',
                    'assets/projects/faceman/faceman-slide-3.jpg'
                ],
                'alts': [
                    'face man slide 1 alt',
                    'face man slide 2 alt',
                    'face man slide 3 alt'
                ],
                'list': [
                    'step 1',
                    'step 2',
                    'step 3',
                    'step 4',
                    'step 5',
                    'step 6'
                ]
            }
        }
    },
    'contact': {

    }
};

// Section Variables
var cldBody = document.querySelector('body'),
    cldNavLinks = document.querySelectorAll('.cld-nav-wrap li a'),
    cldIntroSec = document.getElementById('cld-intro'),
    cldProjectSec = document.getElementById('cld-projects'),
    cldContactSec = document.getElementById('cld-contact'),
    cldIntroBtn = document.querySelectorAll('.intro-btn')[0],
    cldProjectBtn = document.querySelectorAll('.portfolio-btn')[0],
    cldContactBtn = document.querySelectorAll('.contact-btn')[0],
    windowWidth = window.innerWidth,
    windowHeight = window.innerHeight,
    cldLearnBtn = document.querySelectorAll('.cld-learn'),
    cldModalBg = document.querySelector('.cld-modal-bg'),
    cldModalContent = document.querySelector('.cld-modal-content'),
    cldModalCloseBtn = document.querySelector('.cld-modal-close'),
    cldModalTitle = document.querySelector('.cld-modal-body-title'),
    cldModalDesc = document.querySelector('.cld-modal-body-desc'),
    cldModalList = document.querySelector('.cld-modal-body-list'),
    cldModalSlider = document.querySelector('.cld-modal-body-img'),
    cldModalData = '';


// Modal Populating ----- //
function cldModalPopulating() {

    // Description
    cldModalTitle.innerHTML = '<h1>' + cldWebsiteInfo.portfolio[cldModalData].name + '</h1>';
    cldModalDesc.innerHTML = '<p>' + cldWebsiteInfo.portfolio[cldModalData].desc + '</p>';

    // Appending slide images
    for (var i = 0; i < cldWebsiteInfo.portfolio[cldModalData].modalContent.imgs.length; i++) {
        if (i === 0) {
            console.log('only 1');
            cldModalSlider.innerHTML = '<img alt=' + cldWebsiteInfo.portfolio[cldModalData].modalContent.alts[i] + ' src=' + cldWebsiteInfo.portfolio[cldModalData].modalContent.imgs[i] + '>';
        } else {
            console.log('more than 1');
            cldModalSlider.innerHTML = cldModalSlider.innerHTML + '<img alt=' + cldWebsiteInfo.portfolio[cldModalData].modalContent.alts[i] + ' src=' + cldWebsiteInfo.portfolio[cldModalData].modalContent.imgs[i] + '>';
            console.log(i);
        };
    };

    // Appending list
    for (var u = 0; u < cldWebsiteInfo.portfolio[cldModalData].modalContent.list.length; u++) {
        if (u === 0) {
            console.log('only 1');
            cldModalList.innerHTML = '<li>' + cldWebsiteInfo.portfolio[cldModalData].modalContent.list[u] + '</li>';
        } else {
            console.log('more than 1');
            cldModalList.innerHTML = cldModalList.innerHTML + '<li>' + cldWebsiteInfo.portfolio[cldModalData].modalContent.list[u] + '</li>';

        };
    };

    // Carousel Initiate 
    $('.cld-modal-body-img').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
};

// Main Section ----- //
function cldSecDetect() {
    if (cldContactSec.getBoundingClientRect().top <= cldContactBtn.getBoundingClientRect().bottom) {
        cldBody.classList.add('cld-contact-view');
        cldBody.classList.remove('cld-projects-view', 'cld-intro-view');
    } else if (cldProjectSec.getBoundingClientRect().top <= cldProjectBtn.getBoundingClientRect().bottom) {

        cldBody.classList.add('cld-projects-view');
        cldBody.classList.remove('cld-contact-view', 'cld-intro-view');
    } else {
        cldBody.classList.add('cld-intro-view');
        cldBody.classList.remove('cld-contact-view', 'cld-projects-view');
    };
};

// Navigation smooth scroll ----- //
function cldSmoothScroll() {
    cldNavLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            //handle click
            e.preventDefault();
            const cldHref = this.getAttribute('href');
            const cldOffsetTop = document.querySelector(cldHref).offsetTop;

            scroll({
                top: cldOffsetTop,
                behavior: 'smooth'
            });
        });
    });
};

// Modal slide down ----- //
function cldModalAnimate() {

    cldModalContent.style.top = 0;

    var cldModalSlide = null,
        cldModalPos = 0;

    clearInterval(cldModalSlide);
    cldModalSlide = setInterval(modalFrame, 1);

    function modalFrame() {
        if (cldModalPos === 50) {
            clearInterval(cldModalSlide);
        } else {
            cldModalPos += 1;
            cldModalContent.style.top = cldModalPos + '%';
        };
    };
};

// Modal projects open / close ----- //
function cldModalOpenClose() {
    // open
    cldLearnBtn.forEach(function(btn) {
        btn.addEventListener('click', function() {
            // Handle click ----- //
            if (cldModalData !== this.getAttribute('modal-data')) {
                cldModalData = this.getAttribute('modal-data');
                cldModalPopulating();
            };
            // Show Modal
            cldModalAnimate();
            cldBody.classList.add('cld-modal-show');


        });
    });
    // close
    cldBody.addEventListener('click', function(event) {
        if (cldBody.classList.value.indexOf('cld-modal-show') > -1) {
            if (event.target !== cldModalBg && event.target !== cldModalCloseBtn) {
                // console.log('open');
            } else {
                cldBody.classList.remove('cld-modal-show');
                cldModalContent.removeAttribute('style');
                // cldModalContent.classList.remove('cld-content-show');
                // console.log('close');
            };
        };
    });
};

// Onload functions ----- //
var chkReadyState = setInterval(function() {
    if (document.readyState == 'complete') {
        // clear the interval
        clearInterval(chkReadyState);
        // finally your page is loaded.
        cldSecDetect();
        cldModalOpenClose();
        cldSmoothScroll();
    }
}, 100);



// Scroll eventlistener ----- // 
window.addEventListener('scroll', function() {
    cldSecDetect();
});

// Resize eventlistener ----- //
window.addEventListener('resize', function() {
    // cldSecDetect();
});