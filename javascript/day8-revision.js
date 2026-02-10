// Day 7: JavaScript Revision

// Variables
let name = "Manikanta";

// Function
function greet(user) {
  return "Hello " + user;
}

// Array
let skills = ["JavaScript", "React", "Spring Boot"];

// Object
let profile = {
  name: name,
  skills: skills
};

// Loop
for (let skill of profile.skills) {
  console.log(skill);
}

console.log(greet(profile.name));
