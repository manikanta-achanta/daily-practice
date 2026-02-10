// Day 12: JavaScript Array Methods

let numbers = [1, 2, 3, 4, 5];

// forEach
numbers.forEach(function (num) {
  console.log("forEach:", num);
});

// map
let doubled = numbers.map(function (num) {
  return num * 2;
});
console.log("map:", doubled);




// filter
let evenNumbers = numbers.filter(function (num) {
  return num % 2 === 0;
});
console.log("filter:", evenNumbers);

// reduce
let sum = numbers.reduce(function (total, num) {
  return total + num;
}, 0);
console.log("reduce (sum):", sum);
