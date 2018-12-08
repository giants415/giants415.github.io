function getScrollHeight() {
  var scrollHeight = $(window).scrollTop();
  console.log(scrollHeight);
  if (scrollHeight >= 215) {
    console.log('baboey');
    $('nav').css({
      'position' : 'fixed',
      'top' : '0',
      'padding-top' : '5vh',
      'height' : '10vh',
      'background' : '#FFFFFF'
    });
  }
};

$(document).ready(function(){
  $(document).scroll(getScrollHeight);
});
