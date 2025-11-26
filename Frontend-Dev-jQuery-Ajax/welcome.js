$(document).ready(function () {
  function getTimeGreeting() {
    const now = new Date();
    const hour = now.getHours();
    if (hour < 12) return "Good Morning!";
    if (hour < 18) return "Good Afternoon!";
    return "Good Evening!";
  }

  $("#greeting-text").text(getTimeGreeting());

  $("#greeting-text").on("click", function () {
    alert("Greeting clicked — hope you have a great day!");
  });

  $("#change-greeting-btn").on("click", function () {
    $("#greeting-text").text("Believe in yourself — every day is a fresh start!");
  });

  $("#toggle-welcome-btn").on("click", function () {
    $("#welcome-msg").toggle(); 
  });
});
