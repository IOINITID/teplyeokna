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

$("#width").text($("#width").slider("value"));
$("#width").val($("#width").slider("value"));
$(".slider-width-value").text($("#width").slider("value"));

// $(".slider-height").slider({
//   animate: "slow",
//   range: "min",
//   min: 0,
//   max: 10000,
//   value: 0,
//   orientation: "vertical",
//   slide: function (event, ui) {
//     $("#height").text(ui.value);
//     $("#height").val(ui.value);
//     $(".slider-height-value").text(ui.value);
//   }
// });

// $("#height").text($("#height").slider("value"));
// $("#height").val($("#height").slider("value"));
// $(".slider-height-value").text($("#height").slider("value"));
