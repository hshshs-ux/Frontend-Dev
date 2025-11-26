(function (jqOld, jqNew) {
  jqOld(function () {
    const $area = jqOld("#carousel");
    let idx = 0;
    const texts = ["Slide A", "Slide B", "Slide C"];
    function rotate() {
      idx = (idx + 1) % texts.length;
      $area.text("Carousel: " + texts[idx]);
    }
    setInterval(rotate, 3000);
  });

  jqNew(function () {
    const $modalArea = jqNew("#modal-area");
    $modalArea.on("click", function () {
      const $modal = jqNew("<div class='modal'>Notification <button class='close'>Close</button></div>");
      jqNew("body").append($modal);
      $modal.on("click", ".close", function () {
        $modal.remove();
      });
    });

    jqOld(function () {
      jqOld("#widgets").on("mouseenter", function () {
        jqOld(this).addClass("active");
      }).on("mouseleave", function () {
        jqOld(this).removeClass("active");
      });
    });

    jqNew("#widgets").on("mouseenter", function () {
      const tooltip = jqNew("<div class='tooltip'>This is a widget</div>").appendTo("body");
      const offset = jqNew(this).offset();
      tooltip.css({ position: "absolute", top: offset.top + 30, left: offset.left });
      jqNew(this).data("tooltip", tooltip);
    }).on("mouseleave", function () {
      const t = jqNew(this).data("tooltip");
      if (t) t.remove();
    });
  });
})(jq1, jq3);
