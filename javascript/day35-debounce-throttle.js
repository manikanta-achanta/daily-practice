// Day 35: Debounce and Throttle

// 🔹 Debounce: runs only after delay stops
function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// 🔹 Throttle: runs once every delay period
function throttle(func, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      func.apply(this, args);
    }
  };
}

// Example usage
const log = () => console.log("Function executed");

const debouncedLog = debounce(log, 1000);
const throttledLog = throttle(log, 1000);
