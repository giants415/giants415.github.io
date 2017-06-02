$(function () {
  // $('[data-toggle="tooltip"]').tooltip();

  $("#resume").on('click', function(){
    $('#resume-img').toggle();
  });

  $("#portfolio img").on("click", function(){
    $(this).css("zoom", "50%");
  });

});
