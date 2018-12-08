function getScrollHeight() {
  var scrollHeight = $(window).scrollTop();
  console.log(scrollHeight);
};

$(document).ready(function(){
  $(document).scroll(getScrollHeight);
});
