// Day 40: Module Pattern in JavaScript

const CounterModule = (function () {
  // Private variable
  let count = 0;

  // Private function
  function log() {
    console.log("Current count:", count);
  }

  // Public API
  return {
    increment: function () {
      count++;
      log();
    },
    decrement: function () {
      count--;
      log();
    }
  };
})();

// Using module
CounterModule.increment(); // 1
CounterModule.increment(); // 2
CounterModule.decrement(); // 1