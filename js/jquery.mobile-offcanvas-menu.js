/**
 * created by @jaynoe
 * https://github.com/jaynoe
 *
 * Plugin: offcanvas-mobile-menu
 * https://github.com/jaynoe/offcanvas-mobile-menu
*/if($(window).width() < 568){
;(function($){

  $.fn.offcanvasmenu = function(options){

    // Default options
    options = $.extend({
      menuTrigger: "trigger",
      position: "right",
      speed: "0.3",
      width: "220px",
      fixedContainer: false,
      fixedContainerName: ""
    }, options);

    // Build the vars
    // Containers:
    canvas = $(this);
    trigger = $("#" + options.menuTrigger);
    body = $("body");
    link = canvas.find("a");
    pos = options.position;
    fc = $("#" + options.fixedContainerName);

    // inline styles
    // for body
    body.css({
      "-webkit-transition": "all " + options.speed + "s ease-in-out",
      "transition": "all " + options.speed + "s ease-in-out",
      "position": "relative"
    })
    // for offcanvas:
    canvas.css({
      "-webkit-transition": "all " + options.speed + "s ease-in-out",
      "transition": "all " + options.speed + "s ease-in-out",
      "width": options.width,
      "display": "block"
    });
    // for fixedContainer
    if(options.fixedContainer == true) {
    	fc.css({
    		"-webkit-transition": "all " + options.speed + "s ease-in-out",
    		"transition": "all " + options.speed + "s ease-in-out",
    	})
    }

    // check position
    if(pos == "right") {
      body.css("left", "0");
      canvas.css({
        "right": "0",
        "-webkit-transform": "translate(" + options.width + ", 0)",
        "transform": "translate(" + options.width + ", 0)"
      });
      fc.css("left", "0");
    } else {
      body.css("right", "0");
      canvas.css({
        "left": "0",
        "-webkit-transform": "translate(-" + options.width + ", 0)",
        "transform": "translate(-" + options.width + ", 0)"
      });
      fc.css("right", "0");
    }

    // function out & hide
    function canvasOut() {
      canvas.css({
        "-webkit-transform": "translate(0, 0)",
        "transform": "translate(0, 0)"
      });

      if(pos == "right") { 
      	body.css("left", "-" + options.width);
      	fc.css("left", "-" + options.width);
      }
      else {
      	body.css("right", "-" + options.width);
      	fc.css("right", "-" + options.width);
      	
      }
    }

    function canvasHide() {

      if(pos == "right") {
        body.css("left", "0");
        canvas.css({
          "-webkit-transform": "translate(" + options.width + ", 0)",
          "transform": "translate(" + options.width + ", 0)",
        });
        fc.css("left", "0");
      } else {
        body.css("right", "0");
        canvas.css({
          "left": "0",
          "-webkit-transform": "translate(-" + options.width + ", 0)",
          "transform": "translate(-" + options.width + ", 0)"
        });
        fc.css("right", "0");
      }
    }

    // if click on the trigger
    trigger.click(function() {
      canvasOut();
      clicks = $(this).data('clicks');
      if(clicks) { canvasHide(); }
      $(this).data("clicks", !clicks);
    });

    // close when click on link in menu
    link.click(function() {
      canvasHide();
    });

  };

})(jQuery)};
