const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

let total = 0;

for (let i = 0; i < cart.length; i++) {
    let price = cart[i].price;
    let category = cart[i].category;
    let discount = 0;

    if (category === "electronics") {
        discount = price * 0.10;
    } else if (category === "fashion") {
        discount = price * 0.05;
    }

    let finalPrice = price - discount;
    total = total + finalPrice;
}

if (total > 50000) {
    total = total - total * 0.05;
}

console.log("Final Total:", total);