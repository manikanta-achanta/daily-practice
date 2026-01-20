// Day 9: JavaScript Events

// Button click event
document.getElementById("btn").addEventListener("click", function () {
  document.getElementById("message").innerText = "Button clicked!";
});

// Input event
document.getElementById("nameInput").addEventListener("input", function (event) {
  document.getElementById("output").innerText =
    "Hello " + event.target.value;
});
