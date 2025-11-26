$(function () {
  $("#product-list").on("click", ".product", function () {
    $(".product").removeClass("highlight");
    $(this).addClass("highlight");
  });

  $("#product-list").on("mouseenter", ".product", function () {
    if ($(this).find(".extra-details").length === 0) {
      const price = $(this).data("price");
      $(this).append(`<div class="extra-details">Price: $${price}</div>`);
    }
  }).on("mouseleave", ".product", function () {
    $(this).find(".extra-details").remove();
  });

  $("#product-list").on("click", ".fav", function (e) {
    e.stopPropagation(); 
    $(this).toggleClass("selected");
    $(this).text($(this).hasClass("selected") ? "♥" : "♡");
  });

  $("[data-discount]").each(function () {
    $(this).addClass("discounted");
  });

  $("#product-list").on("click", ".product", function () {
    const stockStatus = $(this).data("stock");
    if (stockStatus === "out") {
      alert("Sorry — this product is currently out of stock.");
    }
  });
});
