function showAlert() {
  alert("Welcome to ABC School! Explore our programs and offerings.");
}

function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Please fill out all fields.");
    return false;
  }

  alert("Form submitted successfully!");
  return true;
}
