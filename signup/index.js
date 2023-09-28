import { registerURL } from "../js/components/api.mjs";
import { registerUser } from "../js/utils/registerUser.mjs";

const signupForm = document.querySelector("#signup-form");

signupForm.addEventListener("submit", (event) => {
  event.preventDefault();
  registerUser(registerURL);
});
