
// Day 22: Revised array examples
// Added comments for better understanding




//For loop
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
console.log()



//While loop
let a = 1;

while (a <= 5) {
  console.log(a);
  a++;
}
console.log()


//Do while loop

let b = 1;

do {
  console.log(b);
  b++;
} while (b <= 5);
console.log()


//For of loop
let fruits = ["Apple", "Banana", "Mango"];

for (let fruit of fruits) {
  console.log(fruit);
}
console.log()


//For in loop
let user = {
  name: "Manikanta",
  age: 21,
  city: "Hyderabad"
};

for (let key in user) {
  console.log(key + ": " + user[key]);
}
