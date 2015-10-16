$(document).ready(function() {


  $("header").slideDown("slow", function() {
    $(".question").fadeIn("slow");
  });



  $(".btn").click(function(event) {
      var userInput = $("#numInput").val();

    for (var index = 1; index <= userInput; index ++) {
      if (index % 15 === 0) {
        $(".numbers").append("<p>pingpong</p>");
      } else if (index % 5 === 0) {
        $(".numbers").append("<p>pong</p>");
      } else if (index % 3 === 0) {
        $(".numbers").append("<p>ping</p>");
      } else {
        $(".numbers").append("<p>" + index + "</p>");
      };

    }




    event.preventDefault();
  })





});
