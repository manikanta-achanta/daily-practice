
//1. if statement (single condition)
let age = 20;

if (age >= 18) {
  console.log("You are eligible to vote");
}


//2. if – else statement (two choices)
let marks = 35;

if (marks >= 40) {
  console.log("Pass");
} else {
  console.log("Fail");
}



//if – else if – else statement (multiple conditions)
let score = 78;

if (score >= 90) {
  console.log("Grade A");
} else if (score >= 75) {
  console.log("Grade B");
} else if (score >= 60) {
  console.log("Grade C");
} else {
  console.log("Fail");
}



//switch statement
let a = 10;
let b = 5;
let operator = "+";

switch (operator) {
  case "+":
    console.log(a + b);
    break;

  case "-":
    console.log(a - b);
    break;

  case "*":
    console.log(a * b);
    break;

  case "/":
    console.log(a / b);
    break;

  default:
    console.log("Invalid operator");
}




//Ternary Operator
let marks2 = 35;

let status = marks2 >= 40 ? "Pass" : "Fail";

console.log(status);


