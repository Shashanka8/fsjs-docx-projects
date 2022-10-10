const username = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const submitBtn = document.getElementById("submit");

function nameHandler() {
  if (username.value === "") {
    setErrorForInput(username, "User name can't be blank");
    return "invalid";
  } else {
    setSuccessForInput(username);
    return "valid";
  }
}

function emailHandler() {
  if (email.value === "") {
    setErrorForInput(email, "Email Id can't be blank");
    return "invalid";
  } else if (!isEmail(email.value)) {
    setErrorForInput(email, "Enter a valid email address");
    return "invalid";
  } else {
    setSuccessForInput(email);
    return "valid";
  }
}

function passwordHandler() {
  if (password.value === "") {
    setErrorForInput(password, "Password can't be blank");
    return "invalid";
  } else if (!checkPassword(password.value)) {
    setErrorForInput(password, "Enter a valid password");
    return "invalid";
  } else {
    setSuccessForInput(password);
    return "valid";
  }
}

function confirmPasswordHandler() {
  if (confirmPassword.value === "") {
    setErrorForInput(confirmPassword, "Confirm Password can't be blank");
    return "invalid";
  } else if (password.value !== confirmPassword.value) {
    setErrorForInput(confirmPassword, "Enter same password");
    return "invalid";
  } else {
    setSuccessForInput(confirmPassword);
    return "valid";
  }
}

function checkAll() {
  nameHandler();
  emailHandler();
  passwordHandler();
  confirmPasswordHandler();

  if (
    nameHandler() == "valid" &&
    emailHandler() == "valid" &&
    passwordHandler() == "valid" &&
    confirmPasswordHandler() == "valid"
  ) {
    return alert("Signup Successfull!");
  }
}

function inputHandler(field) {
  switch (field) {
    case "name":
      nameHandler();
      break;
    case "email":
      emailHandler();
      break;
    case "password":
      passwordHandler();
      break;
    case "confirmPassword":
      confirmPasswordHandler();
      break;
    case "submit":
      checkAll();
      break;
  }
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  inputHandler("submit");
});

function setSuccessForInput(field) {
  const formHandle = field.parentElement;
  formHandle.className = "input-container success";
}

function setErrorForInput(field, message) {
  const formHandle = field.parentElement;
  formHandle.className = "input-container error";

  const small = formHandle.querySelector("small");
  small.innerText = message;
}

function isEmail(email) {
  const regEx =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regEx.test(String(email).toLowerCase());
}

function checkPassword(password) {
  const regEx = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  return regEx.test(String(password));
}
