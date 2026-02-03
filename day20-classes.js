// Day 20: JavaScript Classes

class Student {
  constructor(name, course) {
    this.name = name;
    this.course = course;
  }

  getDetails() {
    return `${this.name} is studying ${this.course}`;
  }
}

// Creating object
let student1 = new Student("Manikanta", "Computer Science");
console.log(student1.getDetails());
