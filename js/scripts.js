$(document).ready(function() {

  // show header and form first when page loads //
  $("header").slideDown("slow", function() {
    $(".question").fadeIn("slow");
  });

  // when user clicks 'submit' button //
  $(".btn-input").click(function(event) {
    // get number from user //
    var userInput = $("#numInput").val();
    // hide input form and show button to enter a new number //
    $(".question").slideUp();
    $(".enter-again").slideDown();

    // remove padding on header to shrink its height //
    $("header").animate({
      'padding-top' : 0,
      'padding-right' : 0,
      'padding-bottom' : 0,
      'padding-left' : 0,
    }, "slow");

    // delay for showing the results //
    setTimeout(function() {
      // remove any previous content in .numbers div //
      $(".numbers").text("");
      $(".numbers").fadeIn("slow");

      // check to see that a number has been entered, and that the number is not too large //
      if (isNaN(userInput) || userInput.length == 0) {
        $(".numbers").append("<p>Please enter a number!</p>");
      }
      if (userInput > 9999) {
        $(".numbers").append("<p>Please enter smaller number to prevent crashing the browser!</p>");
        return
      }

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

    },500);

    event.preventDefault();
  });

  // hide .numbers and .enter-again, and show the form input again //
  $(".btn-again").click(function() {
    $("#numInput").val("");
    $(".numbers").fadeOut("slow", function() {
      $(".enter-again").fadeOut("slow", function() {
        // return padding to header //
        $("header").animate({
          'padding-top' : 90,
          'padding-right' : 0,
          'padding-bottom' : 90,
          'padding-left' : 0,
        }, "slow");
        // show number input form again //
        $(".question").fadeIn("slow");
      });
    });
  });

});
