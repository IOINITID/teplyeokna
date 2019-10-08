$('.block-four__header .one').on('click', () => {
  $('.block-four__header .two').removeClass('active');
  $('.block-four__header .three').removeClass('active');
  $('.block-four__header .four').removeClass('active');
  $('.block-four__header .five').removeClass('active');
  $('.block-four__header .six').removeClass('active');
  $('.block-four__header .seven').removeClass('active');
  $('.block-four__header .eight').removeClass('active');
  $('.block-four__header .one').addClass('active');
  $('.white-background img').attr("src", "img/block-four-image-one.svg");
});

$('.block-four__header .two').on('click', () => {
  $('.block-four__header .one').removeClass('active');
  $('.block-four__header .three').removeClass('active');
  $('.block-four__header .four').removeClass('active');
  $('.block-four__header .five').removeClass('active');
  $('.block-four__header .six').removeClass('active');
  $('.block-four__header .seven').removeClass('active');
  $('.block-four__header .eight').removeClass('active');
  $('.block-four__header .two').addClass('active');
  $('.white-background img').attr("src", "img/block-four-image-two.svg");
});

$('.block-four__header .three').on('click', () => {
  $('.block-four__header .one').removeClass('active');
  $('.block-four__header .two').removeClass('active');
  $('.block-four__header .four').removeClass('active');
  $('.block-four__header .five').removeClass('active');
  $('.block-four__header .six').removeClass('active');
  $('.block-four__header .seven').removeClass('active');
  $('.block-four__header .eight').removeClass('active');
  $('.block-four__header .three').addClass('active');
  $('.white-background img').attr("src", "img/block-four-image-three.svg");
});

$('.block-four__header .four').on('click', () => {
  $('.block-four__header .one').removeClass('active');
  $('.block-four__header .two').removeClass('active');
  $('.block-four__header .three').removeClass('active');
  $('.block-four__header .five').removeClass('active');
  $('.block-four__header .six').removeClass('active');
  $('.block-four__header .seven').removeClass('active');
  $('.block-four__header .eight').removeClass('active');
  $('.block-four__header .four').addClass('active');
  $('.white-background img').attr("src", "img/block-four-image-four.svg");
});

$('.block-four__header .five').on('click', () => {
  $('.block-four__header .one').removeClass('active');
  $('.block-four__header .two').removeClass('active');
  $('.block-four__header .three').removeClass('active');
  $('.block-four__header .four').removeClass('active');
  $('.block-four__header .six').removeClass('active');
  $('.block-four__header .seven').removeClass('active');
  $('.block-four__header .eight').removeClass('active');
  $('.block-four__header .five').addClass('active');
  $('.white-background img').attr("src", "img/block-four-image-five.svg");
});

$('.block-four__header .six').on('click', () => {
  $('.block-four__header .one').removeClass('active');
  $('.block-four__header .two').removeClass('active');
  $('.block-four__header .three').removeClass('active');
  $('.block-four__header .four').removeClass('active');
  $('.block-four__header .five').removeClass('active');
  $('.block-four__header .seven').removeClass('active');
  $('.block-four__header .eight').removeClass('active');
  $('.block-four__header .six').addClass('active');
  $('.white-background img').attr("src", "img/block-four-image-six.svg");
});

$('.block-four__header .seven').on('click', () => {
  $('.block-four__header .one').removeClass('active');
  $('.block-four__header .two').removeClass('active');
  $('.block-four__header .three').removeClass('active');
  $('.block-four__header .four').removeClass('active');
  $('.block-four__header .five').removeClass('active');
  $('.block-four__header .six').removeClass('active');
  $('.block-four__header .eight').removeClass('active');
  $('.block-four__header .seven').addClass('active');
  $('.white-background img').attr("src", "img/block-four-image-seven.svg");
});

$('.block-four__header .eight').on('click', () => {
  $('.block-four__header .one').removeClass('active');
  $('.block-four__header .two').removeClass('active');
  $('.block-four__header .three').removeClass('active');
  $('.block-four__header .four').removeClass('active');
  $('.block-four__header .five').removeClass('active');
  $('.block-four__header .six').removeClass('active');
  $('.block-four__header .seven').removeClass('active');
  $('.block-four__header .eight').addClass('active');
  $('.white-background img').attr("src", "img/block-four-image-eight.svg");
});

$('.slider').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: true,
  dots: false,
  // responsive: [{
  //   breakpoint: 576,
  //   settings: {
  //     arrows: false,
  //     slidesToShow: 1,
  //     dots: false
  //   }
  // }]
});

// // mobile menu
// $('.btn_mobile').on('click', function () {
//   $('#menu').show('drop', 300, function () {
//     $('#panel').addClass('blur');
//   });
//   $('#panel').addClass('menuOpen');
// });
// // mobile menu
// $('#mMenuClose').on('click', function () {
//   $('#menu').hide('drop', 300, function () {
//     $('#panel').removeClass('menuOpen')
//   });
//   $('#panel').removeClass('blur');
// });
// //popup
// $('.header__link-icon').on('click', function () {
//   $('.popup').toggle('show');
// });
// //fixed header
// window.addEventListener('scroll', function () {
//   if (pageYOffset >= 300) {
//     document.querySelector('.header').classList.add('header-sticky');
//   } else {
//     document.querySelector('.header').classList.remove('header-sticky');
//   }
// });
