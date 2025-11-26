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

const studentA = new Student("Jai", "CSE");

studentA.showName();
studentA.showBranch();

class PersonClass {
    constructor(personName) {
        this.name = personName;
    }
    showName() {
        console.log(this.name);
    }
}

class StudentClass extends PersonClass {
    constructor(personName, studentBranch) {
        super(personName);
        this.branch = studentBranch;
    }
    showBranch() {
        console.log(this.branch);
    }
}

const studentB = new StudentClass("Jai", "CSE");

studentB.showName();
studentB.showBranch();