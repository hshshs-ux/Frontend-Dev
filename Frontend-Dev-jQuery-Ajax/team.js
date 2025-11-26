$(function () {
  $("#directory").on("click", ".manager", function () {
    const managerId = $(this).data("id");
    $(".employee").removeClass("highlight");
    $(`.employee[data-report-to='${managerId}']`).addClass("highlight");
  });

  $("#directory").on("mouseenter", ".employee", function () {
    $(this).find(".contact-info").show();
  }).on("mouseleave", ".employee", function () {
    $(this).find(".contact-info").hide();
  });

  $("#directory").on("click", ".dept-name", function () {
    const $dept = $(this).closest(".department");
    $dept.children().toggleClass("highlight");
  });

  $("#random-emp-btn").on("click", function () {
    const $employees = $(".employee");
    const randomIndex = Math.floor(Math.random() * $employees.length);
    const $picked = $employees.eq(randomIndex);
    $picked.addClass("highlight");
    $picked.siblings(".employee").addClass("highlight");
  });

  $("#toggle-team-btn").on("click", function () {
    const $eng = $("[data-dept='engineering']");
    $eng.find("ul ul").slideToggle();
  });
});
