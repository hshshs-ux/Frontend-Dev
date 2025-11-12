
let totalPurchase = 8650; 
let discountPercent = 0
if (totalPurchase >= 10000) {
  discountPercent = 25;
} else if (totalPurchase >= 5000) {
  discountPercent = 15;
} else if (totalPurchase >= 2000) {
  discountPercent = 5;
} else {
  discountPercent = 0;
}
let discountAmount = (totalPurchase * discountPercent) / 100;
let finalPrice = totalPurchase - discountAmount;
totalPurchase = Math.round(totalPurchase);
discountAmount = Math.round(discountAmount);
finalPrice = Math.round(finalPrice);

// Step 6: Display all details clearly
console.log("----- Progressive Discount System -----");
console.log(`Original Total: ₹${totalPurchase}`);
console.log(`Discount Applied: ${discountPercent}%`);
console.log(`Final Price after Discount: ₹${finalPrice}`);

