// Section Variables
const cldBody = document.querySelector('body'),
    cldNavLinks = document.querySelectorAll(".cld-nav-wrap li a"),
    // cldNavLinkWrap = document.querySelectorAll(".cld-nav-wrap"),
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
    cldModalCloseBtn = document.querySelector('.cld-modal-close');


// Main Section ----- //
function cldSecDetect() {
    if (cldContactSec.getBoundingClientRect().top <= cldContactBtn.getBoundingClientRect().bottom) {
        cldBody.classList.add("cld-contact-view");
        cldBody.classList.remove('cld-projects-view', 'cld-intro-view');
    } else if (cldProjectSec.getBoundingClientRect().top <= cldProjectBtn.getBoundingClientRect().bottom) {

        cldBody.classList.add("cld-projects-view");
        cldBody.classList.remove('cld-contact-view', 'cld-intro-view');
    } else {
        cldBody.classList.add("cld-intro-view");
        cldBody.classList.remove('cld-contact-view', 'cld-projects-view');
    };
};

// Navigation smooth scroll ----- //
function cldSmoothScroll() {
    cldNavLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            //handle click
            e.preventDefault();
            const cldHref = this.getAttribute("href");
            const cldOffsetTop = document.querySelector(cldHref).offsetTop;

            scroll({
                top: cldOffsetTop,
                behavior: "smooth"
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
            cldModalContent.style.top = cldModalPos + "%";
        };
    };
};

// Modal projects open / close ----- //
function cldModalOpenClose() {
    // open
    cldLearnBtn.forEach(function(btn) {
        btn.addEventListener('click', function() {
            //handle click
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
    if (document.readyState == "complete") {
        // clear the interval
        clearInterval(chkReadyState);
        // finally your page is loaded.
        cldSecDetect();
        cldModalOpenClose();
        cldSmoothScroll();
    }
}, 100);

// Navigation size ----- //

// Scroll eventlistener ----- // 
window.addEventListener("scroll", function() {
    cldSecDetect();
});

// Resize eventlistener ----- //
window.addEventListener('resize', function() {
    // cldSecDetect();
});