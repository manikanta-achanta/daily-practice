// Day 38: Memoization in JavaScript

// Normal function (slow for repeated calls)
function slowSquare(n) {
  console.log("Calculating...");
  return n * n;
}

// Memoized version
function memoize(fn) {
  const cache = {};

  return function (n) {
    if (cache[n] !== undefined) {
      console.log("Fetching from cache...");
      return cache[n];
    } else {
      const result = fn(n);
      cache[n] = result;
      return result;
    }
  };
}

const memoizedSquare = memoize(slowSquare);

console.log(memoizedSquare(5)); // Calculates
console.log(memoizedSquare(5)); // Uses cache