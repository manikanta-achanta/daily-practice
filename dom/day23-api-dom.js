// Day 24: Improved API + DOM

async function loadUsers() {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  let users = await response.json();

  let list = document.getElementById("userList");
  list.innerHTML = "";

  users.forEach(user => {
    let li = document.createElement("li");
    li.innerText = `${user.name} - ${user.email}`;
    list.appendChild(li);
  });
}
