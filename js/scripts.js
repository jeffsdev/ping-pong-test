$(document).ready(function() {

  $("header").slideDown("slow", function() {
    $(".question").fadeIn("slow");
  });

  $(".btn").click(function(event) {
    // get number from user //
    var userInput = $("#numInput").val();
    // remove any previous content in .numbers div //
    $(".numbers").text("");
    $(".numbers").fadeIn("slow");
    // ping-pong loop //
    for (var index = 1; index <= userInput; index ++) {
      if (index % 15 === 0) {
        $(".numbers").append("<p class='pp'>ping-pong</p>");
      } else if (index % 5 === 0) {
        $(".numbers").append("<p class='po'>pong</p>");
      } else if (index % 3 === 0) {
        $(".numbers").append("<p class='pi'>ping</p>");
      } else {
        $(".numbers").append("<p>" + index + "</p>");
      };
    };
    event.preventDefault();
  });

});
