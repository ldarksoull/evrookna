// маска для телефона
$(function(){
  $("#phone1").mask("+7(999) 999-99-99");
});
//2 пример
$("#date").mask("99.99.9999", {placeholder: "дд.мм.гггг" });
$("#index").mask("999999", {placeholder: " " });
//3
$("#phone3").mask("8(999) 999-9999", {
  completed: function(){ alert("Вы ввели номер: " + this.val()); }
});
//4
$("#number").mask("0.9?9");
//5
$.mask.definitions['~']='[+-]';
$("#number2").mask("~9.99");
$.mask.definitions['h']='[A-Fa-f0-9]';
$("#color").mask("#hhhhhh");

  $(function() {
    function maskPhone() {
      var country = $('#country option:selected').val();
      switch (country) {
        case "ru":
          $("#phone").mask("+7(999) 999-99-99");
          break;
        case "ua":
          $("#phone").mask("+380(999) 999-99-99");
          break;
        case "by":
          $("#phone").mask("+375(999) 999-99-99");
          break;          
      }    
    }
    maskPhone();
    $('#country').change(function() {
      maskPhone();
    });
  });

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
var typeWindow = $('input[name="window"]:checked').val();
var packageType = $('input[name="window"]:checked').val();
var hand = $('input[name="window"]:checked').val();
//checkboxes
var otliv = $('input[name="otliv"]'); 
var podokonnik = $('input[name="podokonnik"]');
var mechanizm = $('input[name="mechanizm"]');
var childLock = $('input[name="child-lock"]');
var moskit = $('input[name="moskit"]');
var otkos = $('input[name="otkos"]');
var montage = $('input[name="montage"]');
var noise = $('input[name="noise"]');
var lessEnergy = $('input[name="less-energy"]');
var multyfunc = $('input[name="multyfunc"]');

var otlivValue = 0;
var podokonnikValue = 0;
var mechanizmValue = 0;
var childLockValue = 0;
var moskitValue = 0;
var otkosValue = 0;
var montageValue = 0;
var noiseValue = 0;
var lessEnergyValue = 0;
var multyfuncValue = 0;

otliv.on('change', function(){
  if ($(this).prop('checked')) {
    otlivValue = 100;
}
  else{
    otlivValue = 0;
  }
  total();
});

podokonnik.on('change', function(){
  if ($(this).prop('checked')) {
    podokonnikValue = 200;
}
  else{
    podokonnikValue = 0;
  }
  total();
});

mechanizm.on('change', function(){
  if ($(this).prop('checked')) {
    mechanizmValue = 300;
}
  else{
    mechanizmValue = 0;
  }
  total();
});

childLock.on('change', function(){
  if ($(this).prop('checked')) {
    childLockValue = 400;
}
  else{
    childLockValue = 0;
  }
  total();
});

moskit.on('change', function(){
  if ($(this).prop('checked')) {
    moskitValue = 500;
}
  else{
    moskitValue = 0;
  }
  total();
});

otkos.on('change', function(){
  if ($(this).prop('checked')) {
    otkosValue = 600;
}
  else{
    otkosValue = 0;
  }
  total();
});

montage.on('change', function(){
  if ($(this).prop('checked')) {
    montageValue = 700;
}
  else{
    montageValue = 0;
  }
  total();
});

noise.on('change', function(){
  if ($(this).prop('checked')) {
    noiseValue = 800;
}
  else{
    noiseValue = 0;
  }
  total();
});

lessEnergy.on('change', function(){
  if ($(this).prop('checked')) {
    lessEnergyValue = 900;
}
  else{
    lessEnergyValue = 0;
  }
  total();
});

multyfunc.on('change', function(){
  if ($(this).prop('checked')) {
    multyfuncValue = 1000;
}
  else{
    multyfuncValue = 0;
  }
  total();
});


$('input[name="hand"]').on('change', function() {
  hand = $("input[name='hand']:checked").val();
  total();
});
$('input[name="package"]').on('change', function() {
  packageType = $("input[name='package']:checked").val();
  total();
});
$('input[name="window"]').on('change', function() {
  typeWindow = $("input[name='window']:checked").val();
  total();
});
$('input[name="type"]').on('change', function() {
    material = $("input[name='type']:checked").val();
    total();
});

function total() {
    var total = Math.round((((v + h) * (winType * material * typeWindow * packageType)) + +hand) + otlivValue + podokonnikValue + mechanizmValue + childLockValue + moskitValue + otkosValue + montageValue + noiseValue + lessEnergyValue + multyfuncValue) ;
    $(".price__num").html(total + " руб");
}
