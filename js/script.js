var main = function() { //главная функция
 
  $('.icon-menu').click(function() { /* выбираем класс icon-menu и
             добавляем метод click с функцией, вызываемой при клике */
      $('.menu').animate({ //выбираем класс menu и метод animate
          right: '0px' 
      }, 200); //скорость движения меню в мс
      $('.icon-menu').animate({ //выбираем класс menu и метод animate
        right: '285px' /* теперь при клике по иконке, она переместится на 
        285px влево и визуально останется на своем месте*/
    }, 200);
    $('.icon-close').animate({
      right: '0px' // иконка закрытия встает справа от меню
  }, 200); 
      $('.body').animate({ //выбираем тег body и метод animate
          right: '285px' /* чтобы всё содержимое также сдвигалось вправо
             при открытии меню, установим ему положение 285px */
      }, 200); //скорость движения меню в мс
  });
  $('.icon-close').click(function() { //выбираем класс icon-close и метод click
      $('.menu').animate({ //выбираем класс menu и метод animate
          right: '-285px' /* при клике на крестик меню вернется назад в свое
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

//Вертикальный range
$( function() {
    $( "#slider-vertical" ).slider({
      orientation: "vertical",
      range: "min",
      min: 0,
      max: 100,
      value: 60,
      slide: function( event, ui ) {
        $( "#amount" ).val( ui.value );
      }
    });
    $( "#amount" ).val( $( "#slider-vertical" ).slider( "value" ) );
  } );
  //Горизонтальный range
  $( function() {
    $( "#slider-range-min" ).slider({
      range: "min",
      value: 37,
      min: 1,
      max: 700,
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.value );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range-min" ).slider( "value" ) );
  } );