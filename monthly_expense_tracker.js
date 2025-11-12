// Q3. Monthly Expense Tracker
// This program calculates total and average monthly expenses,
// then applies a 10% tax to the total and displays all values properly formatted.

// Step 1: Create an array of expenses for 5 categories
// Categories: food, travel, rent, bills, leisure
let expenses = [4500, 1200, 8000, 2200, 1500];

// Step 2: Calculate the total expenses using a loop or reduce()
let totalExpenses = expenses.reduce((sum, value) => sum + value, 0);

// Step 3: Calculate the average monthly expense
let averageExpense = totalExpenses / expenses.length;

// Step 4: Add 10% tax to the total
// Use arithmetic and assignment operators (+=)
let taxRate = 0.10;
let finalAmount = totalExpenses; // Copy total to modify
finalAmount += finalAmount * taxRate; // Add 10% tax

// Step 5: Round values using toFixed(2) for better readability
totalExpenses = totalExpenses.toFixed(2);
averageExpense = averageExpense.toFixed(2);
finalAmount = finalAmount.toFixed(2);

// Step 6: Display all results clearly
console.log("----- Monthly Expense Summary -----");
console.log(`Expenses (₹): ${expenses.join(", ")}`);
console.log(`Total Expenses: ₹${totalExpenses}`);
console.log(`Average Expense: ₹${averageExpense}`);
console.log(`Final Amount after 10% Tax: ₹${finalAmount}`);
