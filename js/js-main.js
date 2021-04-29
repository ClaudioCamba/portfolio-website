// ------ Card Flip ------
// var card = document.querySelector('.card');
// card.addEventListener('click', function() {
//     card.classList.toggle('is-flipped');
// });

// ------ GrcldIntroBars ------
// var // Get screen wcldIntroBarth
//     cldScrnW = window.innerWcldIntroBarth,
//     cldScrnH = window.innerHeight / 2,
//     // Get 10% of screen total wcldIntroBarth
//     cldboxW = cldScrnW / 20,
//     canvas = document.getElementBycldIntroBar("canvas"),
//     c = canvas.getContext("2d"),
//     boxSize = cldboxW,
//     boxes = cldScrnW / boxSize,
//     boxesH = Math.floor(cldScrnH / cldboxW);
// // Canvas EventListerner
// canvas.addEventListener('click', handleClick);
// canvas.addEventListener('mousemove', handleClick);

// console.log(cldboxW);
// console.log(boxesH);

// document.querySelectorAll('#canvas')[0].setAttribute("wcldIntroBarth", cldScrnW);
// document.querySelectorAll('#canvas')[0].setAttribute("height", cldboxW * boxesH + 1);

// function drawBox() {
//     c.beginPath();
//     c.fillStyle = "white";
//     c.lineWcldIntroBarth = 1;
//     c.strokeStyle = 'black';
//     for (var row = 0; row < boxesH; row++) {
//         for (var column = 0; column < boxes; column++) {
//             var x = column * boxSize;
//             var y = row * boxSize;
//             c.rect(x, y, boxSize, boxSize);
//             c.fill();
//             c.stroke();
//         }
//     }
//     c.closePath();
// }

// function handleClick(e) {
//     c.fillStyle = "black";

//     c.fillRect(Math.floor(e.offsetX / boxSize) * boxSize,
//         Math.floor(e.offsetY / boxSize) * boxSize,
//         boxSize, boxSize);
// }

// drawBox();

// Intro ----- //
// console.log('claudio');
// var cldIntroBar = null;

// function myMove() {
//     var elem = document.querySelectorAll(".cld-bar")[0];
//     var width = 0;
//     clearInterval(cldIntroBar);
//     cldIntroBar = setInterval(frame, 5);

//     function frame() {
//         if (width >= 100) {
//             clearInterval(cldIntroBar);
//         } else if (width >= 86) {
//             width += 0.2;
//             elem.style.width = width + "%";
//         } else if (width >= 75 && width <= 85) {
//             width += 0.3;
//             elem.style.width = width + "%";
//         } else {
//             width += 0.5;
//             elem.style.width = width + "%";
//         }
//     }
// }
// myMove();
// Mouse control shadow ----- //

// Navigation Scroll Effect ----- //
$('.cld-main-nav a').click(function() {
    $('html, body').animate({
        scrollTop: $($(this).attr('href'))
            .offset().top
    }, 700);
    return false;
});

// Fix Nav bar once scroll past 1/4 of screen ----- //



// Get viewport height
let vw = window.innerWidth,
    vh = window.innerHeight,
    cldNav = document.querySelectorAll('.cld-main-nav')[0],
    cldNavInner = document.querySelectorAll('.cld-main-nav')[0];

// Get cta/nav location
let box = document.querySelector('.cld-main-nav'),
    rect = box.getBoundingClientRect();



window.addEventListener("scroll", navBarLocation);

function navBarLocation() {

    vh = Math.floor(window.innerHeight / 4) * 3;
    // console.log('vh ' + vh);
    console.log(Math.floor(rect.top));

    rect = box.getBoundingClientRect();
    // console.log('nav ' + Math.floor(rect.top));

    if (Math.floor(rect.top) <= vh) {
        // console.log('scrolling');
        // $('.cld-main-nav').removeClass('cld-nav-intro').addClass('cld-nav-scroll');
        cldNav.classList.remove("cld-nav-intro");
        cldNav.classList.add("cld-nav-scroll");
        cldNavInner.classList.add("blu-bg");
    } else {
        // console.log('top of page');
        // $('.cld-main-nav').addClass('cld-nav-intro').removeClass('cld-nav-scroll');
        cldNav.classList.add("cld-nav-intro");
        cldNav.classList.remove("cld-nav-scroll");
        cldNavInner.classList.remove("blu-bg");
    };

    if (Math.floor(rect.top) <= 0) {
        console.log('STICKY');
        cldNav.classList.add("cld-nav-stick");

    } else {
        console.log('UNSTUCK');
        cldNav.classList.remove("cld-nav-stick");

    };
};
// Initial 
navBarLocation();

// Card Flip ----- //
// var card = document.querySelectorAll('.card');
// card.forEach(myFunction);

// function myFunction(item) {
//     item.addEventListener('click', function() {
//         item.classList.toggle('is-flipped');
//     });
// };