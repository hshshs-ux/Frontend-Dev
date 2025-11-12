// Q7. Smart Guessing Game (Number Range)
// This program simulates a number guessing game where the system generates a secret number (1–50).
// Based on the user's guess, it provides feedback: correct, close, too high, or too low.

// Step 1: Generate a random secret number between 1 and 50
let secretNumber = Math.floor(Math.random() * 50) + 1;

// Step 2: Assign a test value for the user's guess (change to test different cases)
let userGuess = 27;

// Step 3: Display both numbers for testing purposes
console.log("----- Smart Guessing Game -----");
console.log(`Secret Number: ${secretNumber}`);
console.log(`Your Guess: ${userGuess}`);

// Step 4: Compare guess and print result using nested if and logical operators
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
    console.log("⚠️ Invalid input."); // Fallback (shouldn't normally happen)
  }
}
