// Менюшка
if($(window).width() < 568){
$("#offcanvas").offcanvasmenu({
    // trigger element
    menuTrigger: "trigger",
    // or 'left'
    position: "left",
    // animation speed
    speed: "0.2",
    // menu width
    width: "200px"
  });}
// кнопка менюшки
(function() {
    "use strict";
    var toggles = document.querySelectorAll(".cmn-toggle-switch");
  
    for (var i = toggles.length - 1; i >= 0; i--) {
      var toggle = toggles[i];
      toggleHandler(toggle);
    };
    function toggleHandler(toggle) {
      toggle.addEventListener( "click", function(e) {
        e.preventDefault();
        (this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");
      });
    }
  })();