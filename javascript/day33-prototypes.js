// Day 33: Prototypal Inheritance

// Parent object
const person = {
  greet() {
    console.log("Hello from person");
  }
};

// Child object
const student = {
  study() {
    console.log("Studying...");
  }
};

// Setting prototype
student.__proto__ = person;

// Using inherited method
student.greet();   // inherited from person
student.study();   // own method
