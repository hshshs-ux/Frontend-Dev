// Q1. Personalized Login Greeting
// This program greets the user with a time-based message (Morning, Afternoon, or Evening)

// Step 1: Declare a variable for the user's name
let userName = "Jai"; // You can replace this with any name or get input dynamically

// Step 2: Get the current hour using JavaScript's Date object
let currentHour = new Date().getHours();

// Step 3: Initialize a variable to store the greeting message
let greeting;

// Step 4: Use conditional statements to decide the greeting based on the time of day
if (currentHour < 12) {
  greeting = `Good Morning, ${userName}!`;
} else if (currentHour >= 12 && currentHour < 17) {
  greeting = `Good Afternoon, ${userName}!`;
} else {
  greeting = `Good Evening, ${userName}!`;
}

// Step 5: Display the greeting message in the console
console.log(greeting);
