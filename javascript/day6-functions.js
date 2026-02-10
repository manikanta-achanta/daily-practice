// Basic Function (Normal Function)
function greet() {
  console.log("Hello, welcome!");
}

greet(); // function call


//Arrow Function (ES6 – VERY IMPORTANT)
const square = (n) => {
  return n * n;
};

console.log(square(4));


//Default Parameters
function greet(name = "Guest") {
  console.log("Hello " + name);
}

greet();
greet("Manikanta");


//Anonymous Function
setTimeout(function () {
  console.log("This runs after 2 seconds");
}, 2000);


//Callback Function (IMPORTANT)
function processData(callback) {
  callback();
}

processData(function () {
  console.log("Callback executed");
});


//Immediately Invoked Function (IIFE)
(function () {
  console.log("Runs immediately");
})();
