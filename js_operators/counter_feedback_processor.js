let feedback = "Great product! Fast delivery and amazing sound quality!";
let wordsArray = feedback.split(" ");
let wordCount = wordsArray.length;

let text = feedback.toLowerCase();
let containsBad = text.includes("bad");
let containsPoor = text.includes("poor");

console.log("Word Count:", wordCount);

if (containsBad || containsPoor) {
    console.log("Needs Improvement");
} else {
    console.log("Positive Feedback");
}