function Car(carBrand, carModel) {
    this.brand = carBrand;
    this.model = carModel;
}

Car.prototype.getDetails = function() {
    console.log(this.brand + " " + this.model);
};

const carOne = new Car("Honda", "City");
const carTwo = new Car("Toyota", "Fortuner");

carOne.getDetails();
carTwo.getDetails();