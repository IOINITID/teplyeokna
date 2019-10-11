// item action
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
// item action
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
// item action
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
// item action
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
// item action
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
// item action
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
// item action
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
// item action
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
// value width
$(".slider-width").slider({
  animate: "slow",
  range: "min",
  min: 0,
  max: 10000,
  value: 0,
  slide: function (event, ui) {
    $("#width").text(ui.value);
    $("#width").val(ui.value);
    $(".slider-width-value").text(ui.value);
  }
});
$("#width").text($("#width").slider().val());
$("#width").val($("#width").slider().val());
$(".slider-width-value").text($("#width").slider().val());
// value height
$(".slider-height").slider({
  animate: "slow",
  range: "min",
  min: 0,
  max: 10000,
  value: 0,
  orientation: "vertical",
  slide: function (event, ui) {
    $("#height").text(ui.value);
    $("#height").val(ui.value);
    $(".slider-height-value").text(ui.value);
  }
});
$("#height").text($("#height").slider().val());
$("#height").val($("#height").slider().val());
$(".slider-height-value").text($("#height").slider().val());
// scrolling
$('.scroll ul li a').on('click', function () {
  $('#menu').hide('drop', 300, function () {
    $('#panel').removeClass('menuOpen')
  });
  $('#panel').removeClass('blur');
  var el = $(this);
  var dest = el.attr('href');
  if (dest !== undefined && dest !== '') {
    $('html').animate({
      scrollTop: $(dest).offset().top
    }, 500);
  };
  return false;
});
// scroll top
$(window).scroll(function () {
  if ($(this).scrollTop() > 2000) {
    $('.up').fadeIn().addClass('up-active');
  } else {
    $('.up').fadeOut().removeClass('up-active');
  }
});
$('.up').click(function () {
  $('body,html').animate({
    scrollTop: 0
  }, 500);
  return false;
});
// slider-one
$('.slider-one').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: true,
  dots: false,
  responsive: [{
    breakpoint: 768,
    settings: {
      arrows: true,
      slidesToShow: 1,
      dots: false
    }
  }]
});
// slider-two
$('.slider-two').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: true,
  dots: false,
  responsive: [{
    breakpoint: 768,
    settings: {
      arrows: false,
      slidesToShow: 1,
      dots: true
    }
  }]
});
// slider-three
$('.slider-three').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: true,
  dots: false,
  responsive: [{
    breakpoint: 768,
    settings: {
      arrows: false,
      slidesToShow: 1,
      dots: true
    }
  }]
});
// slider-four
$('.slider-four').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: true,
  dots: false,
  responsive: [{
    breakpoint: 768,
    settings: {
      arrows: false,
      slidesToShow: 1,
      dots: true
    }
  }]
});
// mobile menu
$('.btn_mobile').on('click', function () {
  $('#menu').show('drop', 300, function () {
    $('#panel').addClass('blur');
  });
  $('#panel').addClass('menuOpen');
});
// mobile menu
$('#mMenuClose').on('click', function () {
  $('#menu').hide('drop', 300, function () {
    $('#panel').removeClass('menuOpen')
  });
  $('#panel').removeClass('blur');
});
// fixed header
window.addEventListener('scroll', function () {
  if (pageYOffset >= 300) {
    document.querySelector('.header').classList.add('header-sticky');
  } else {
    document.querySelector('.header').classList.remove('header-sticky');
  }
});
// scroll to right
$('.questions-two .block-left .scroll-button-right').on('click', () => {
  $(".questions-two .block-left .forms").animate({
    scrollLeft: '1500'
  }, 500);
  $('.questions-two .block-left .scroll-button-right').hide();
  $('.questions-two .block-left .scroll-button-left').show();
});
// scrol to left
$('.questions-two .block-left .scroll-button-left').on('click', () => {
  $(".questions-two .block-left .forms").animate({
    scrollLeft: '-1500'
  }, 500);
  $('.questions-two .block-left .scroll-button-left').hide();
  $('.questions-two .block-left .scroll-button-right').show();
});
// questions-five one
$('.questions-two .block-left .quantity .quantity-item-one').on('click', () => {
  $('.questions-two .block-left .quantity label .quantity-two').removeClass('active');
  $('.questions-two .block-left .quantity label .quantity-three').removeClass('active');
  $('.questions-two .block-left .quantity label .quantity-four').removeClass('active');
  $('.questions-two .block-left .quantity label .quantity-five').removeClass('active');
  $('.questions-two .block-left .quantity label .quantity-one').addClass('active');
});
// questions-five two
$('.questions-two .block-left .quantity .quantity-item-two').on('click', () => {
  $('.questions-two .block-left .quantity label .quantity-one').removeClass('active');
  $('.questions-two .block-left .quantity label .quantity-three').removeClass('active');
  $('.questions-two .block-left .quantity label .quantity-four').removeClass('active');
  $('.questions-two .block-left .quantity label .quantity-five').removeClass('active');
  $('.questions-two .block-left .quantity label .quantity-two').addClass('active');
});
// questions-five three
$('.questions-two .block-left .quantity .quantity-item-three').on('click', () => {
  $('.questions-two .block-left .quantity label .quantity-two').removeClass('active');
  $('.questions-two .block-left .quantity label .quantity-one').removeClass('active');
  $('.questions-two .block-left .quantity label .quantity-four').removeClass('active');
  $('.questions-two .block-left .quantity label .quantity-five').removeClass('active');
  $('.questions-two .block-left .quantity label .quantity-three').addClass('active');
});
// questions-five four
$('.questions-two .block-left .quantity .quantity-item-four').on('click', () => {
  $('.questions-two .block-left .quantity label .quantity-two').removeClass('active');
  $('.questions-two .block-left .quantity label .quantity-three').removeClass('active');
  $('.questions-two .block-left .quantity label .quantity-one').removeClass('active');
  $('.questions-two .block-left .quantity label .quantity-five').removeClass('active');
  $('.questions-two .block-left .quantity label .quantity-four').addClass('active');
});
// questions-five five
$('.questions-two .block-left .quantity .quantity-item-five').on('click', () => {
  $('.questions-two .block-left .quantity label .quantity-two').removeClass('active');
  $('.questions-two .block-left .quantity label .quantity-three').removeClass('active');
  $('.questions-two .block-left .quantity label .quantity-four').removeClass('active');
  $('.questions-two .block-left .quantity label .quantity-one').removeClass('active');
  $('.questions-two .block-left .quantity label .quantity-five').addClass('active');
});

$('.questions-one-link-next').on('click', () => {
  $('.questions-one').hide();
  $('.questions-block-two').show();
});

$('.questions-two-link-next').on('click', () => {
  $('.questions-block-two').hide();
  $('.questions-three').show();
});

$('.questions-two-link-prev').on('click', () => {
  $('.questions-one').show();
  $('.questions-block-two').hide();
});

$('.questions-three-link-next').on('click', () => {
  $('.questions-three').hide();
  $('.questions-four').show();
});

$('.questions-three-link-prev').on('click', () => {
  $('.questions-block-two').show();
  $('.questions-three').hide();
});

$('.questions-four-link-next').on('click', () => {
  $('.questions-four').hide();
  $('.questions-five').show();
});

$('.questions-four-link-prev').on('click', () => {
  $('.questions-three').show();
  $('.questions-four').hide();
});

$('.questions-five-link-next').on('click', () => {
  $('.questions-five').hide();
  $('.questions-six').show();
});

$('.questions-five-link-prev').on('click', () => {
  $('.questions-four').show();
  $('.questions-five').hide();
});

$('.questions-six-link-next').on('click', () => {
  $('.questions-six').hide();
  $('.questions-seven').show();
});

$('.questions-six-link-prev').on('click', () => {
  $('.questions-five').show();
  $('.questions-six').hide();
});

$('.questions-two .block-left .places .places-one').on('click', () => {
  $('.questions-two .block-left .places label .places-icon-two').hide();
  $('.questions-two .block-left .places label .places-icon-one').show();
});

$('.questions-two .block-left .places .places-two').on('click', () => {
  $('.questions-two .block-left .places label .places-icon-one').hide();
  $('.questions-two .block-left .places label .places-icon-two').show();
});

$('.questions-two .block-left .models .models-one').on('click', () => {
  $('.questions-two .block-left .models label .models-icon-two').hide();
  $('.questions-two .block-left .models label .models-icon-three').hide();
  $('.questions-two .block-left .models label .models-icon-one').show();
});

$('.questions-two .block-left .models .models-two').on('click', () => {
  $('.questions-two .block-left .models label .models-icon-two').show();
  $('.questions-two .block-left .models label .models-icon-three').hide();
  $('.questions-two .block-left .models label .models-icon-one').hide();
});

$('.questions-two .block-left .models .models-three').on('click', () => {
  $('.questions-two .block-left .models label .models-icon-two').hide();
  $('.questions-two .block-left .models label .models-icon-three').show();
  $('.questions-two .block-left .models label .models-icon-one').hide();
});

$('.questions-two .block-left .materials .materials-one').on('click', () => {
  $('.questions-two .block-left .materials label .materials-icon-two').hide();
  $('.questions-two .block-left .materials label .materials-icon-three').hide();
  $('.questions-two .block-left .materials label .materials-icon-one').show();
});

$('.questions-two .block-left .materials .materials-two').on('click', () => {
  $('.questions-two .block-left .materials label .materials-icon-two').show();
  $('.questions-two .block-left .materials label .materials-icon-three').hide();
  $('.questions-two .block-left .materials label .materials-icon-one').hide();
});

$('.questions-two .block-left .materials .materials-three').on('click', () => {
  $('.questions-two .block-left .materials label .materials-icon-two').hide();
  $('.questions-two .block-left .materials label .materials-icon-three').show();
  $('.questions-two .block-left .materials label .materials-icon-one').hide();
});

$('.complete-button').on('click', () => {
    $('.questions-one').show();
    $('.questions-two').hide();
    $('.questions-three').hide();
    $('.questions-four').hide();
    $('.questions-five').hide();
    $('.questions-six').hide();
    $('.questions-seven').hide();
});
