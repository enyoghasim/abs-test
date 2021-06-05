const isEmpty = (arg) => {
  if (arg === "") {
    return true;
  }
  return false;
};

const handleSubmit = (e) => {
  e.preventDefault();
  const firstname = document.getElementById("firstname");
  const lastname = document.getElementById("lastname");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const error = document.querySelector(".error");

  const firstnameValue = firstname.value;
  const lastnameValue = lastname.value;
  const emailValue = email.value;
  const passwordvalue = password.value;

  if (
    isEmpty(firstnameValue) ||
    isEmpty(lastnameValue) ||
    isEmpty(emailValue) ||
    isEmpty(passwordvalue)
  ) {
    error.textContent = "please fill in all fields";
    error.style.display = "block";
  }
};

// register button
const button = document.getElementById("submit");
button.addEventListener("click", handleSubmit);
