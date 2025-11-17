let productName = " wireless headphones PRO ";
let trimmed = productName.trim();
let lower = trimmed.toLowerCase();
let words = lower.split(" ");
let finalWords = [];

for (let i = 0; i < words.length; i++) {
    if (words[i].length > 0) {
        let capital =
            words[i].charAt(0).toUpperCase() + words[i].slice(1);
        finalWords.push(capital);
    }
}

let cleanedTitle = finalWords.join(" ");
cleanedTitle = cleanedTitle.replace("Pro", "Pro Edition");

console.log("Final Title:", cleanedTitle);
console.log("Length:", cleanedTitle.length);