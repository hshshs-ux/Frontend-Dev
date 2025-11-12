
let secretNumber = Math.floor(Math.random() * 50) + 1;
let userGuess = 27;

console.log("----- Smart Guessing Game -----");
console.log(`Secret Number: ${secretNumber}`);
console.log(`Your Guess: ${userGuess}`);

if (userGuess === secretNumber) {
  console.log("✅ Correct guess!");
} else {
  // If not correct, check how close the guess is
  if (Math.abs(userGuess - secretNumber) <= 3) {
    console.log("🔥 Very close!");
  } else if (userGuess > secretNumber) {
    console.log("📈 Too high!");
  } else if (userGuess < secretNumber) {
    console.log("📉 Too low!");
  } else {
    console.log("⚠️ Invalid input.");
  }
}

