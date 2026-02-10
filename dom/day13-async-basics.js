// Day 13: JavaScript Asynchronous Basics

console.log("Start");

// setTimeout example
setTimeout(function () {
  console.log("This runs after 2 seconds");
}, 2000);

// setInterval example
let count = 1;
let intervalId = setInterval(function () {
  console.log("Interval count:", count);
  count++;

  if (count > 3) {
    clearInterval(intervalId);
    console.log("Interval stopped");
  }
}, 1000);

console.log("End");
