// Day 14: JavaScript Promises (Basics)

// Creating a promise
let myPromise = new Promise(function (resolve, reject) {
  let success = true;

  if (success) {
    resolve("Promise resolved successfully");
  } else {
    reject("Promise rejected");
  }
});

// Consuming the promise
myPromise
  .then(function (message) {
    console.log("SUCCESS:", message);
  })
  .catch(function (error) {
    console.log("ERROR:", error);
  });
