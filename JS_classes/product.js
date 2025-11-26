class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }
    applyDiscount(percent) {
        this.price = this.price - (this.price * percent / 100);
    }
    getDetails() {
        return this.id + " - " + this.name + " - ₹" + this.price + " - " + this.category;
    }
}
let p1 = new Product(1, "Laptop", 50000, "Electronics");
let p2 = new Product(2, "Shoes", 1200, "Fashion");
let p3 = new Product(3, "Keyboard", 700, "Electronics");
let products = [p1, p2, p3];
let expensiveProducts = products.filter(item => item.price > 1000);
console.log(expensiveProducts);