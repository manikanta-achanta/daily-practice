// Day 37: Currying in JavaScript

// Normal function
function add(a, b, c) {
  return a + b + c;
}

console.log("Normal:", add(1, 2, 3));

// Curried version
function curryAdd(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log("Curried:", curryAdd(1)(2)(3));

// Arrow function version
const curriedArrow = a => b => c => a + b + c;
console.log("Arrow Curried:", curriedArrow(1)(2)(3));