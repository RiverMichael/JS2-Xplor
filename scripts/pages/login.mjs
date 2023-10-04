import { onLoginFormSubmit } from "../utils/onLoginFormSubmit.mjs";
import { checkIfLoggedIn } from "../utils/checkIfLoggedIn.mjs";

function login() {
  try {
    const loginForm = document.querySelector("#login-form");
    loginForm.addEventListener("submit", onLoginFormSubmit);

    checkIfLoggedIn();
  } catch (error) {
    console.log(error);
  }
}
login();
