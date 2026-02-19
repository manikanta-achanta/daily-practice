// Day 36: call, apply, bind

function introduce(city, country) {
  console.log(
    `Hi, I am ${this.name} from ${city}, ${country}`
  );
}

const person1 = { name: "Manikanta" };
const person2 = { name: "Rahul" };

// 🔹 call → arguments passed separately
introduce.call(person1, "Hyderabad", "India");

// 🔹 apply → arguments passed as array
introduce.apply(person2, ["Mumbai", "India"]);

// 🔹 bind → returns a new function
const boundFunction = introduce.bind(person1, "Chennai", "India");
boundFunction();
