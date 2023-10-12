import { onLoginFormSubmit } from "../utils/onLoginFormSubmit.mjs";

function login() {
  try {
    const loginForm = document.querySelector("#login-form");
    loginForm.addEventListener("submit", onLoginFormSubmit);
  } catch (error) {
    console.log(error);
  }
}
login();
