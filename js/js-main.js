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


// Navigation Scroll Effect ---- //
$('.cld-main-mid a').click(function() {
    $('html, body').animate({
        scrollTop: $($(this).attr('href'))
            .offset().top
    }, 15000);
    return false;
});

// $(window).scroll(function() {
//     var x = $(".cld-main-mid").offset().top;
//     $("section").each(function(index) {
//         var z = $(this).attr("id");
//         if (x > $(this).offset().top && x <= $(this).offset().top + $(this).height()) {
//             $('a.' + z).css("color", "red");
//         } else {
//             $('a.' + z).css("color", "gray")
//         }
//     })
// })