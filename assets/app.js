$(function () {
  
  $("#resume").on('click', function(){
    $('#resume-img').toggle();
  });

  $(".port-item > img").on("mouseover", function(){
    $(this).addClass("zoom");
  });

  $(".port-item > img").on("mouseout", function(){
    $(this).removeClass("zoom");
  });

});
