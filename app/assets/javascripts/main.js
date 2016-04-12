$(function () {
    $('.tlt').textillate({ in: { effect: 'fadeInRight' }, 
    loop: true, 
    out: {effect: 'fadeOutLeft', reverse:true},
    minDisplayTime: 3500
  });
})