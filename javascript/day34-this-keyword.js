// Day 34: Understanding "this"

// 1️⃣ Global context
console.log(this);

// 2️⃣ Inside a regular function
function show() {
  console.log("Regular function this:", this);
}
show();

// 3️⃣ Inside an object method
const user = {
  name: "Manikanta",
  greet() {
    console.log("Object method this:", this.name);
  }
};
user.greet();

// 4️⃣ Arrow function inside object
const person = {
  name: "Rahul",
  greet: () => {
    console.log("Arrow function this:", this.name);
  }
};
person.greet();
