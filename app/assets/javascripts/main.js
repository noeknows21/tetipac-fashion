$(document).on('ready page:load', ready);
function ready() {
  
  $(function () {
      $('.tlt').textillate({ in: { effect: 'fadeInRight' }, 
      loop: true, 
      out: {effect: 'fadeOutLeft', reverse:true},
      minDisplayTime: 3500
    });
  })
}