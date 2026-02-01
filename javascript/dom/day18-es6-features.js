// Day 18: JavaScript ES6 Features

// 1. let and const
let age = 21;
const country = "India";

// 2. Arrow function
const add = (a, b) => a + b;
console.log("Sum:", add(5, 3));

// 3. Template literals
let name = "Manikanta";
console.log(`Hello ${name} welcome!`);

// 4. Destructuring
let user = {
  username: "mani",
  email: "mani@gmail.com"
};

let { username, email } = user;
console.log(username, email);

// 5. Spread operator
let numbers = [1, 2, 3,100];
let newNumbers = [...numbers, 4, 5];
console.log(newNumbers);
