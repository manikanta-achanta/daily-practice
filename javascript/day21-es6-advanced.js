// Day 21: Advanced ES6 Features

// 1. Set (unique values)
let numbers = new Set([1, 2, 2, 3, 4, 4]);
console.log(numbers);

// 2. Map (key-value pairs)
let userMap = new Map();
userMap.set("name", "Manikanta");
userMap.set("age", 21);
console.log(userMap.get("name"));

// 3. Default parameters
function greet(name = "Guest") {
  console.log(`Hello ${name}`);
}
greet();
greet("Manikanta");

// 4. Rest parameters
function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
console.log("Sum:", sum(1, 2, 3, 4));
