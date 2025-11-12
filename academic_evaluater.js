// Q4. Academic Performance Evaluator
// This program checks a student's promotion status based on marks in 5 subjects.
// It calculates the average, percentage, and applies logical checks for promotion rules.

// Step 1: Create an array to store marks of 5 subjects
// Example subjects: Math, Science, English, Computer, History
let marks = [88, 92, 79, 85, 90];

// Step 2: Calculate total marks using reduce()
let totalMarks = marks.reduce((sum, value) => sum + value, 0);

// Step 3: Calculate average and percentage
let averageMarks = totalMarks / marks.length;
let percentage = (totalMarks / (marks.length * 100)) * 100; // assuming each subject is out of 100

// Step 4: Add validation — if any subject < 35, student is detained
let hasFailedSubject = marks.some(mark => mark < 35);

// Step 5: Use logical conditions to determine promotion status
let resultMessage = "";

if (hasFailedSubject) {
  resultMessage = "Detained (Failed in one or more subjects)";
} else if (percentage >= 85) {
  resultMessage = "Promoted with Distinction";
} else if (percentage >= 50 && percentage < 85) {
  resultMessage = "Promoted";
} else {
  resultMessage = "Detained";
}

// Step 6: Display the results neatly
console.log("----- Academic Performance Report -----");
console.log(`Marks: ${marks.join(", ")}`);
console.log(`Total Marks: ${totalMarks}`);
console.log(`Average Marks: ${averageMarks.toFixed(2)}`);
console.log(`Percentage: ${percentage.toFixed(2)}%`);
console.log(`Result: ${resultMessage}`);
