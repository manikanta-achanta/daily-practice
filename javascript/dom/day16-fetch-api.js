// Day 16: JavaScript Fetch API

async function getUsers() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let users = await response.json();

    users.forEach(function (user) {
      console.log("Name:", user.name);
      console.log("Email:", user.email);
      console.log("-------------");
    });
  } catch (error) {
    console.log("Error fetching data:", error);
  }
}

getUsers();
