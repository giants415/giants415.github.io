// function getScrollHeight() {
//   var scrollHeight = $(window).scrollTop();
//   console.log(scrollHeight);
//   while (scrollHeight <= 270) {
//   var $navHeight = $('nav').height();
//   console.log($navHeight);
//     $('nav').height()
//   }
//   if (scrollHeight >= 215) {
//     console.log('baboey');
//     $('nav').css({
//       'position' : 'fixed',
//       'top' : '0',
//       'padding-top' : '5vh',
//       'height' : '10vh',
//       'background' : '#FFFFFF'
//     });
//   }
// };

// working to get nav bar to stay a fixed height after scroll height reaches a boundry

$(document).ready(function(){
  // $(document).scroll(getScrollHeight);
});
