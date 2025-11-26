$(function () {
  const $search = $("#course-search");
  const $list = $("#course-list");
  const $count = $("#count");

  $search.on("keyup", function () {
    const q = $(this).val().trim();
    filterCourses(q);
  });

  function filterCourses(query) {
    const regex = new RegExp("(" + escapeRegExp(query) + ")", "ig");
    let matched = 0;
    $list.find(".course").each(function () {
      const text = $(this).text();
      if (!query) {
        $(this).show().html(text).removeClass("matched");
      } else if (text.match(regex)) {
        const highlighted = text.replace(regex, "<span class='match'>$1</span>");
        $(this).html(highlighted).show().addClass("matched");
        $(this).css("border", "1px solid #ffd54f"); // example dynamic styling via .css()
        matched++;
      } else {
        $(this).hide();
      }
    });
    $count.text(`Matched: ${matched}`);
  }

  $("#clear-search").on("click", function () {
    $search.val("");
    filterCourses("");
  });

  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
});
