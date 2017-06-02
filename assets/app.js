$(function () {
  // $('[data-toggle="tooltip"]').tooltip();

  $("#resume").on('click', function(){
    $('#resume-img').toggle();
  });

  $(".port-item > img").on("mouseover", function(){
    console.log('img hit');
    $(this).addClass("zoom");
  });

  $(".port-item > img").on("mouseout", function(){
    console.log('img hit');
    $(this).removeClass("zoom");
  });

});
