// Q6. Progressive Discount System
// This program applies a dynamic discount based on the total purchase amount.
// It calculates the discount, final price, and displays all values clearly.

// Step 1: Input total purchase amount
let totalPurchase = 8650; // You can change this value to test other cases

// Step 2: Declare a variable to hold the discount percentage
let discountPercent = 0;

// Step 3: Apply discount tiers using conditional statements
if (totalPurchase >= 10000) {
  discountPercent = 25;
} else if (totalPurchase >= 5000) {
  discountPercent = 15;
} else if (totalPurchase >= 2000) {
  discountPercent = 5;
} else {
  discountPercent = 0;
}

// Step 4: Calculate the final price after applying discount
let discountAmount = (totalPurchase * discountPercent) / 100;
let finalPrice = totalPurchase - discountAmount;

// Step 5: Round the values using Math.round()
totalPurchase = Math.round(totalPurchase);
discountAmount = Math.round(discountAmount);
finalPrice = Math.round(finalPrice);

// Step 6: Display all details clearly
console.log("----- Progressive Discount System -----");
console.log(`Original Total: ₹${totalPurchase}`);
console.log(`Discount Applied: ${discountPercent}%`);
console.log(`Final Price after Discount: ₹${finalPrice}`);
