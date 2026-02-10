// Day 11: JavaScript Form Validation

function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  let error = document.getElementById("error");

  if (name === "") {
    error.innerText = "Name is required";
    return false;
  }

  if (email === "") {
    error.innerText = "Email is required";
    return false;
  }

  error.innerText = "Form submitted successfully!";
  return false; // stop actual submit for demo
}
