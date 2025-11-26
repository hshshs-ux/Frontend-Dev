class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }
    getAnnualSalary() {
        return this.salary * 12;
    }
    applyBonus(percent) {
        this.salary = this.salary + (this.salary * percent / 100);
    }
}
let e1 = new Employee(1, "A", "IT", 30000);
let e2 = new Employee(2, "B", "HR", 25000);
let e3 = new Employee(3, "C", "Sales", 28000);
let e4 = new Employee(4, "D", "IT", 35000);
let e5 = new Employee(5, "E", "Finance", 40000);
let list = [e1, e2, e3, e4, e5];
let total = list.reduce((acc, emp) => acc + emp.getAnnualSalary(), 0);
console.log(total);