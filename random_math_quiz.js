 // Q9. Random Math Quiz Generator

// Generate two random numbers between 1 and 20
let num1 = Math.floor(Math.random() * 20) + 1;
let num2 = Math.floor(Math.random() * 20) + 1;

// List of possible arithmetic operators
const operators = ['+', '-', '*', '/'];

// Randomly select one operator
let randomOperator = operators[Math.floor(Math.random() * operators.length)];

let correctAnswer;

// Use switch to calculate the correct answer based on operator
switch (randomOperator) {
  case '+':
    correctAnswer = num1 + num2;
    break;

  case '-':
    correctAnswer = num1 - num2;
    break;

  case '*':
    correctAnswer = num1 * num2;
    break;

  case '/':
    // Round division to 2 decimal places
    correctAnswer = (num1 / num2).toFixed(2);
    break;

  default:
    console.log("Invalid operator");
}

// Display question and correct answer
console.log("🧮 Random Math Quiz");
console.log(`Question: ${num1} ${randomOperator} ${num2} = ?`);
console.log(`Correct Answer: ${correctAnswer}`);
