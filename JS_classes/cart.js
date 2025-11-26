class Cart {
    constructor() {
        this.items = [];
    }
    addItem(name, price, qty) {
        this.items.push({ name, price, qty });
    }
    getTotal() {
        return this.items.reduce((t, i) => t + i.price * i.qty, 0);
    }
    applyCoupon(code) {
        let ok = /^(SAVE|DISC)[0-9]{2}$/.test(code);
        if (!ok) return this.getTotal();
        let discount = parseInt(code.match(/[0-9]{2}/)[0]);
        let total = this.getTotal();
        return total - (total * discount / 100);
    }
}
let cart = new Cart();
cart.addItem("Bag", 1000, 2);
cart.addItem("Watch", 2000, 1);
console.log(cart.applyCoupon("SAVE20"));