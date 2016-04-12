$(document).on('ready page:load', ready);
function ready() {
  
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