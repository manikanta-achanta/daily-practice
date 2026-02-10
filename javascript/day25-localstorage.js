// Day 25: JavaScript Local Storage

function saveName() {
  let name = document.getElementById("nameInput").value;
  localStorage.setItem("username", name);
}

function loadName() {
  let storedName = localStorage.getItem("username");
  document.getElementById("output").innerText = storedName
    ? `Stored Name: ${storedName}`
    : "No name found";
}

function clearName() {
  localStorage.removeItem("username");
  document.getElementById("output").innerText = "Storage cleared";
}
