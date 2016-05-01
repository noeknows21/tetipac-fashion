$(document).on('ready page:load', ready);
function ready() {
  
  //products page animation
  $( "#image-click-notice" ).animate({
    opacity: 1,
    fontSize: "1.5em",
  }, 3500 );
  //end products page animation
  
  $(function () {
      $('.tlt').textillate({ in: { effect: 'fadeInRight' }, 
      loop: true, 
      out: {effect: 'fadeOutLeft', reverse:true},
      minDisplayTime: 3500
    });
  })
  
  $(function () {
    $("#p1").fluidbox();
  });
  $(function () {
    $("#p2").fluidbox();
  });
  $(function () {
    $("#p3").fluidbox();
  });
  $(function () {
    $("#p4").fluidbox();
  });
  $(function () {
    $("#p5").fluidbox();
  });
  $(function () {
    $("#p6").fluidbox();
  });
  $(function () {
    $("#p7").fluidbox();
  });
  
}