let scores = [];
for (let i = 0; i < 8; i++) {
    let randomScore = Math.floor(Math.random() * 71) + 30;
    scores.push(randomScore);
}

let highest = Math.max(...scores);
let lowest = Math.min(...scores);

let sum = 0;
for (let i = 0; i < scores.length; i++) {
    sum = sum + scores[i];
}
let average = sum / scores.length;

let passedCount = 0;
for (let i = 0; i < scores.length; i++) {
    if (scores[i] >= 50) {
        passedCount++;
    }
}

console.log("Scores:", scores);
console.log("Highest:", highest);
console.log("Lowest:", lowest);
console.log("Average:", average);
console.log("Passed:", passedCount);