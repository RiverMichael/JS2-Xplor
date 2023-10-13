import { onRegisterFormSubmit } from "../utils/onRegisterFormSubmit.mjs";

function register() {
  try {
    const registerForm = document.querySelector("#register-form");
    registerForm.addEventListener("submit", onRegisterFormSubmit);
  } catch (error) {
    console.log(error);
  }
}
register();
