$(function () {
  const $posts = $("#posts");

  let postCounter = $posts.children().length + 1;
  $("#add-post").on("click", function () {
    $posts.append(`<div class="post">New Post ${postCounter++}</div>`);
  });

  $("#prepend-featured").on("click", function () {
    $posts.prepend(`<div class="post featured">Featured Post — ${new Date().toLocaleTimeString()}</div>`);
  });

  $("#remove-last").on("click", function () {
    $posts.children().last().remove();
  });

  $("#add-tag").on("click", function () {
    const tag = $("#tag-text").val().trim();
    if (!tag) return;
    const $firstPost = $posts.children().first();
    $firstPost.before(`<div class="post-tag">Tag: ${tag}</div>`);
    $("#tag-text").val("");
  });

  $(document).on("click", "#posts .post", function () {
    const text = $(this).text();
    if (text.toLowerCase().includes("javascript")) {
      $(this).css("background", "#fff8e1");
    } else {
      $(this).css("background", "");
    }
  });
});
