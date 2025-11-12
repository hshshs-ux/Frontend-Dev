
let currentSalary = 50000;   
let annualIncrementRate = 10; 
let salaryProjection = [];
for (let year = 1; year <= 5; year++) {
  currentSalary += (currentSalary * annualIncrementRate) / 100;
  let roundedSalary = Math.round(currentSalary);
  salaryProjection.push({
    Year: `Year ${year}`,
    "Projected Salary (₹)": roundedSalary;
  })
}
console.log("----- 5-Year Employee Salary Projection -----");
console.table(salaryProjection);

