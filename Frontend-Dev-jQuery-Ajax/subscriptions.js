$(function () {
  const $topicsList = $("#topics-list");
  const $messages = $("#messages");

  $topicsList.on("click", ".subscribe", function () {
    const $topic = $(this).closest(".topic");
    $topic.addClass("subscribed");
    showMessage(`Subscribed to ${$topic.data("topic")}`);
  });

  $topicsList.on("click", ".unsubscribe", function () {
    const $topic = $(this).closest(".topic");
    $topic.removeClass("subscribed");
    showMessage(`Unsubscribed from ${$topic.data("topic")}`);
  });

  $("#add-topic-btn").on("click", function () {
    const newTopic = $("#new-topic").val().trim();
    if (!newTopic) return;
    $topicsList.append(`<div class="topic" data-topic="${newTopic}">${newTopic} <button class="subscribe">Subscribe</button> <button class="unsubscribe">Unsubscribe</button></div>`);
    $("#new-topic").val("");
    showMessage(`Added topic ${newTopic}`);
  });

  function disableSubscribeForTopic(topicName) {
    const $topic = $(`.topic[data-topic='${topicName}']`);
    const $subscribeBtn = $topic.find(".subscribe");
    $subscribeBtn.replaceWith($subscribeBtn.clone(true).off("click"));
    showMessage(`Subscribe disabled for ${topicName}`);
  }

  $("#topics-list").on("dblclick", ".topic", function () {
    const name = $(this).data("topic");
    disableSubscribeForTopic(name);
  });

  function showMessage(text) {
    const $el = $(`<div class="success">${text}</div>`);
    $messages.prepend($el);
    setTimeout(() => $el.fadeOut(400, () => $el.remove()), 3000);
  }
});
