$(function () {
  $("#hide-btn").on("click", function () {
    $("#banner1").hide();
  });

  $("#show-btn").on("click", function () {
    $("#banner1").show();
  });

  $("#slide-btn").on("click", function () {
    $(".banner").slideToggle();
  });

  $("#fade-btn").on("click", function () {
    $(".banner").fadeToggle();
  });

  let current = 0;
  const $banners = $(".banner");
  function rotateBanners() {
    $banners.eq(current).fadeOut(500, function () {
      current = (current + 1) % $banners.length;
      $banners.eq(current).fadeIn(500);
    });
  }
  $banners.hide().eq(0).show();
  setInterval(rotateBanners, 5000);
});
