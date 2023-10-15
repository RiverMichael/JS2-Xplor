import { onLoginFormSubmit } from "../utils/onLoginFormSubmit.mjs";

/**
 * Sets up the login form submit event listener.
 */
function login() {
  const loginForm = document.querySelector("#login-form");
  loginForm.addEventListener("submit", onLoginFormSubmit);
}
login();
