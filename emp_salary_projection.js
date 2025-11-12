// Q8. Employee Salary Projection
// This program calculates a 5-year salary projection with a yearly increment rate.
// It uses a for loop, assignment operators, and rounding to show projected salaries.

// Step 1: Declare current salary and annual increment rate (in %)
let currentSalary = 50000;   // Starting monthly salary in ₹
let annualIncrementRate = 10; // Increment rate in percent per year

// Step 2: Create an empty array to store the yearly projection data
let salaryProjection = [];

// Step 3: Use a for loop to calculate salary for each of 5 years
for (let year = 1; year <= 5; year++) {
  // Apply increment using assignment operator
  currentSalary += (currentSalary * annualIncrementRate) / 100;

  // Round the value using Math.round()
  let roundedSalary = Math.round(currentSalary);

  // Push data into array for display
  salaryProjection.push({
    Year: `Year ${year}`,
    "Projected Salary (₹)": roundedSalary
  });
}

// Step 4: Print the result as a formatted console table
console.log("----- 5-Year Employee Salary Projection -----");
console.table(salaryProjection);
