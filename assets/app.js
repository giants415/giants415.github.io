console.log('app.js connected');

$document.ready(

  $('#one').mouseover(function() {
    $('#two').addClass('trigger');
    setTimeout(function(){
      $('#two').removeClass('trigger');
    }, 10000);
  });

);
