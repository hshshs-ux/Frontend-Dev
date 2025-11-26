$(function () {
  $("#faq").on("click", ".question", function () {
    $(this).next(".answer").slideToggle();
  });

  $("#faq").on("mouseenter", ".question", function () {
    $(this).css("color", "#0077cc");
  }).on("mouseleave", ".question", function () {
    $(this).css("color", "");
  });

  $("#faq").on("dblclick", ".question", function () {
    $(".answer").slideUp();
  });

  $("#faq").on("focus", ".answer-input", function () {
    $(this).closest(".qa").find(".question").addClass("focused");
  });

  $("#faq").on("blur", ".answer-input", function () {
    $(this).closest(".qa").find(".question").removeClass("focused");
  });
});
