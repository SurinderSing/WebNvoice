$(document).ready(function () {
  $("form").submit(function (event) {
    event.preventDefault();
    let response = grecaptcha.getResponse();
    if (response.length == "") {
      return false;
    } else {
      $.ajax({
        type: "post",
        url: "../formHandler.php",
        data: $(this).serialize(),
        success: function (e) {
          $("form").trigger("reset");
          window.location.replace("../../thank-you.html");
          return true;
        },
      }).fail(function () {
        alert("Something went wrong!, Please  try again after some time.");
        return false;
      });
    }
  });
});
