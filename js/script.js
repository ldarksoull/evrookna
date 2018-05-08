var main = function () { //главная функция

  $('.icon-menu').click(function () {
    /* выбираем класс icon-menu и
                добавляем метод click с функцией, вызываемой при клике */
    $('.menu').animate({ //выбираем класс menu и метод animate
      right: '0px'
    }, 200); //скорость движения меню в мс
    $('.icon-menu').animate({ //выбираем класс menu и метод animate
      right: '285px'
      /* теперь при клике по иконке, она переместится на 
             285px влево и визуально останется на своем месте*/
    }, 200);
    $('.icon-close').animate({
      right: '0px' // иконка закрытия встает справа от меню
    }, 200);
    $('.body').animate({ //выбираем тег body и метод animate
      right: '285px'
      /* чтобы всё содержимое также сдвигалось вправо
                  при открытии меню, установим ему положение 285px */
    }, 200); //скорость движения меню в мс
  });
  $('.icon-close').click(function () { //выбираем класс icon-close и метод click
    $('.menu').animate({ //выбираем класс menu и метод animate
      right: '-285px'
      /* при клике на крестик меню вернется назад в свое
                  положение и скроется */
    }, 200); //скорость движения меню в мс
    $('.icon-close').animate({ //выбираем класс menu и метод animate
      right: '-285px' /* иконка закрытия скрывается вместе с меню */
    }, 200);
    $('.icon-menu').animate({ //выбираем класс menu и метод animate
      right: '0px' /* при клике на крестик иконка меню встает на свое место справа */
    }, 200);
    $('.body').animate({ //выбираем тег body и метод animate
      right: '0px' //а содержимое страницы снова вернется в положение 0px
    }, 200); //скорость движения меню в мс
  });
};
$(document).ready(main);

//слайдер
winType = 2;
$('.item-1').on("click", function () {
  $('.winimage').removeClass("current-image");
  $('.image-1').addClass("current-image");
  trigger(1);
});
$('.item-2').on("click", function () {
  $('.winimage').removeClass("current-image");
  $('.image-2').addClass("current-image");
  trigger(2);
});
$('.item-3').on("click", function () {
  $('.winimage').removeClass("current-image");
  $('.image-3').addClass("current-image");
  trigger(3);
});
$('.item-4').on("click", function () {
  $('.winimage').removeClass("current-image");
  $('.image-4').addClass("current-image");
  trigger(4);
});

var h,v;
//Вертикальный range
$(function () {
  $("#slider-vertical").slider({
    orientation: "vertical",
    range: "min",
    min: 0,
    max: 3000,
    step: 1,
    value: 0,
    slide: function (value, ui) {
        v = ui.value;
        $("#amount").val(ui.value + " мм");
        total();
    }
  });
  $("#amount").val($("#slider-vertical").slider("value") + " мм");
  $(".price__num").html($("#slider-vertical").slider("value") + " руб");
  v = $("#slider-vertical").slider("value");

//Горизонтальный range
  $("#slider-range-min").slider({
    range: "min",
    value: 0,
    min: 0,
    max: 3000,
    step: 1,
    slide: function (value, ui) {
      h = ui.value;
      $("#amount2").val(ui.value + " мм");
      total();
    }
  });
  $("#amount2").val($("#slider-range-min").slider("value") + " мм");
  $(".price__num").html($("#slider-range-min").slider("value") + " руб");
  h = $("#slider-range-min").slider("value");
});
function trigger(x) {
    winType = x;
    total();
}

var material = $('input[name="type"]:checked').val();
$('input[name="type"]').on('change', function() {
    material = $("input[name='type']:checked").val();
    total();
});

function total() {
    var total = Math.round((v + h) * winType * material);
    $(".price__num").html(total + " руб");
}
