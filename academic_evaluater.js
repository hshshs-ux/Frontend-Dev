
let marks = [88, 92, 79, 85, 90];
let totalMarks = marks.reduce((sum, value) => sum + value, 0)
let averageMarks = totalMarks / marks.length;
let percentage = (totalMarks / (marks.length * 100)) * 100; 

let hasFailedSubject = marks.some(mark => mark < 35);

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

console.log("----- Academic Performance Report -----");
console.log(`Marks: ${marks.join(", ")}`);
console.log(`Total Marks: ${totalMarks}`);
console.log(`Average Marks: ${averageMarks.toFixed(2)}`);
console.log(`Percentage: ${percentage.toFixed(2)}%`);
console.log(`Result: ${resultMessage}`);

