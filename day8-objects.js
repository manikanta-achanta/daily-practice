// Day 6: JavaScript Objects

// 1. Creating an object
let student = {
  name: "Manikanta",
  age: 21,
  course: "Computer Science",
  isStudent: true
};

// 2. Accessing properties
console.log(student.name);
console.log(student["age"]);

// 3. Updating properties
student.age = 22;
student.city = "Hyderabad";

// 4. Looping through object
for (let key in student) {
  console.log(key + ":", student[key]);
}
