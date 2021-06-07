const isEmpty = (arg) => {
  if (arg === "") {
    return true;
  }
  return false;
};

const handleSubmit = (e) => {
  e.preventDefault();
  const error = document.querySelector(".error");
  const firstname = document.getElementById("firstname");
  const lastname = document.getElementById("lastname");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const firstnameValue = firstname.value;
  const lastnameValue = lastname.value;
  const emailValue = email.value;
  const passwordvalue = password.value;
  error.style.display = "none";
  error.innerHTML = "";

  const ul = document.createElement("ul");
  if (
    isEmpty(firstnameValue) ||
    isEmpty(lastnameValue) ||
    isEmpty(emailValue) ||
    isEmpty(passwordvalue)
  ) {
    ul.appendChild(document.createElement("li")).innerText =
      "Please fill in all fields";
    error.style.display = "block";
    error.appendChild(ul);
    return;
  }
  if (!emailRegex.test(emailValue)) {
    ul.appendChild(document.createElement("li")).innerText =
      "Please input a valid Email adress";
    error.style.display = "block";
    error.appendChild(ul);
  }
};

// register button
const button = document.getElementById("submit");
button.addEventListener("click", handleSubmit);
