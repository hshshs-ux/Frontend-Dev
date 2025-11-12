let expenses = [4500, 1200, 8000, 2200, 1500];
let totalExpenses = expenses.reduce((sum, value) => sum + value, 0);
let averageExpense = totalExpenses / expenses.length;
let taxRate = 0.10;
let finalAmount = totalExpenses; 
finalAmount += finalAmount * taxRate; 
totalExpenses = totalExpenses.toFixed(2);
averageExpense = averageExpense.toFixed(2);
finalAmount = finalAmount.toFixed(2);

console.log("----- Monthly Expense Summary -----");
console.log(`Expenses (₹): ${expenses.join(", ")}`);
console.log(`Total Expenses: ₹${totalExpenses}`);
console.log(`Average Expense: ₹${averageExpense}`);
console.log(`Final Amount after 10% Tax: ₹${finalAmount}`);

