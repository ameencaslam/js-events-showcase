const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const requirementsDiv = document.getElementById("passwordRequirements");
const submitButton = document.getElementById("submitButton");
const form = document.getElementById("passwordForm");

const requirements = {
  length: document.getElementById("length"),
  uppercase: document.getElementById("uppercase"),
  lowercase: document.getElementById("lowercase"),
  special: document.getElementById("special"),
  number: document.getElementById("number"),
  match: document.getElementById("match"),
};

function checkRequirements() {
  const passValue = password.value;
  const confirmValue = confirmPassword.value;
  let allValid = true;

  // Check length
  if (passValue.length >= 8) {
    requirements.length.classList.add("valid");
    requirements.length.classList.remove("invalid");
  } else {
    requirements.length.classList.add("invalid");
    requirements.length.classList.remove("valid");
    allValid = false;
  }

  // Check uppercase
  if (/[A-Z]/.test(passValue)) {
    requirements.uppercase.classList.add("valid");
    requirements.uppercase.classList.remove("invalid");
  } else {
    requirements.uppercase.classList.add("invalid");
    requirements.uppercase.classList.remove("valid");
    allValid = false;
  }

  // Check lowercase
  if (/[a-z]/.test(passValue)) {
    requirements.lowercase.classList.add("valid");
    requirements.lowercase.classList.remove("invalid");
  } else {
    requirements.lowercase.classList.add("invalid");
    requirements.lowercase.classList.remove("valid");
    allValid = false;
  }

  // Check special character
  if (/[!@#$%^&*(),.?":{}|<>]/.test(passValue)) {
    requirements.special.classList.add("valid");
    requirements.special.classList.remove("invalid");
  } else {
    requirements.special.classList.add("invalid");
    requirements.special.classList.remove("valid");
    allValid = false;
  }

  // Check number
  if (/\d/.test(passValue)) {
    requirements.number.classList.add("valid");
    requirements.number.classList.remove("invalid");
  } else {
    requirements.number.classList.add("invalid");
    requirements.number.classList.remove("valid");
    allValid = false;
  }

  // Check if passwords match
  if (passValue === confirmValue && passValue.length > 0) {
    requirements.match.classList.add("valid");
    requirements.match.classList.remove("invalid");
  } else {
    requirements.match.classList.add("invalid");
    requirements.match.classList.remove("valid");
    allValid = false;
  }

  // Enable submit button if all conditions are met
  submitButton.disabled = !allValid;

  // Show or hide elements based on whether there is any input
  if (passValue.length > 0 || confirmValue.length > 0) {
    requirementsDiv.classList.add("show");
  } else {
    requirementsDiv.classList.remove("show");
  }
}

// Add event listeners to check requirements on input
password.addEventListener("input", checkRequirements);
confirmPassword.addEventListener("input", checkRequirements);

// Handle form submission
form.onsubmit = function (event) {
  event.preventDefault(); // Prevent the form from actually submitting
  alert("Form submitted successfully!");
  window.location.href = "events.html";
};
