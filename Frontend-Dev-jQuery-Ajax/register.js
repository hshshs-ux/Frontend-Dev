$(function () {
  const existingEmails = ["alice@example.com", "bob@example.com"]

  function isEmailValid(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  $("#reg-form").on("submit", function (e) {
    e.preventDefault();
    let valid = true;

    const $name = $("#name");
    const $email = $("#email");
    const $password = $("#password");
    const nameVal = $name.val().trim();
    const emailVal = $email.val().trim();
    const passwordVal = $password.val();

    $name.removeClass("error");
    $email.removeClass("error");
    $password.removeClass("error");
    $("#result").empty();

    if (!nameVal) {
      $name.addClass("error");
      valid = false;
    }

    if (!isEmailValid(emailVal)) {
      $email.addClass("error");
      valid = false;
    } else if (existingEmails.includes(emailVal.toLowerCase())) {
      $email.addClass("error");
      $("#result").append("<div class='error-msg'>Email already in use.</div>");
      valid = false;
    }

    if (passwordVal.length < 8) {
      $password.addClass("error");
      valid = false;
    }

    if (valid) {
      $("#result").html("<div class='success'>Registration successful!</div>");
      existingEmails.push(emailVal.toLowerCase());
      this.reset();
    } else {
      $("#result").append("<div class='error-msg'>Please fix the highlighted fields.</div>");
    }
  });

  $("#name, #email, #password").on("input", function () {
    $(this).removeClass("error");
  });
});
