"use strict";
(function q5(){
  console.log("Before declaration, var 'score' is hoisted and initialized to undefined ->", typeof score !== "undefined" ? score : undefined);
  announce();
  var score = 50;
  function announce(){ console.log("Game started (function hoisted)"); }
  let status = "ready";
  startGame();
  function startGame(){ console.log("status at call:", status); }
  const announceArrow = () => console.log("Game started (arrow)");
  const startGameArrow = () => console.log("status for arrow:", status);
  announceArrow();
  startGameArrow();
  console.log("After initialization, score =", score);
})();
