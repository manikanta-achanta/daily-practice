// Day 31: JavaScript Closures

function outerFunction() {
  let counter = 0;

  return function innerFunction() {
    counter++;
    console.log("Counter:", counter);
  };
}

const increment = outerFunction();

increment(); // 1
increment(); // 2
increment(); // 3
