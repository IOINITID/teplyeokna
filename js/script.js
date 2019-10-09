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
