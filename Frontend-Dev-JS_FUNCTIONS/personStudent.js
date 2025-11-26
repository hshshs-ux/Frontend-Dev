function Person(personName) {
    this.name = personName;
}

Person.prototype.showName = function() {
    console.log(this.name);
};

function Student(personName, studentBranch) {
    Person.call(this, personName);
    this.branch = studentBranch;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.showBranch = function() {
    console.log(this.branch);
};

const studentOne = new Student("Jai", "CSE");

studentOne.showName();
studentOne.showBranch();