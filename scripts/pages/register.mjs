import { onRegisterFormSubmit } from "../utils/onRegisterFormSubmit.mjs";

/**
 * Sets up the register form submit event listener.
 */
function register() {
  const registerForm = document.querySelector("#register-form");
  registerForm.addEventListener("submit", onRegisterFormSubmit);
}
register();
