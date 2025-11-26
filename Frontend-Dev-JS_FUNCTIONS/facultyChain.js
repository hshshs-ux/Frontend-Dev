function Person(personName) {
    this.name = personName;
}

Person.prototype.showName = function() {
    console.log(this.name);
};

function Faculty(personName, facultyId) {
    Person.call(this, personName);
    this.id = facultyId;
}

Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.showId = function() {
    console.log(this.id);
};

function Professor(personName, facultyId, subjectName) {
    Faculty.call(this, personName, facultyId);
    this.subject = subjectName;
}

Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.showSubject = function() {
    console.log(this.subject);
};

const prof = new Professor("Dr. Jai", 101, "AI");

prof.showName();
prof.showId();
prof.showSubject();