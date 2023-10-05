import { onSignupFormSubmit } from "../utils/onSignupFormSubmit.mjs";

function signup() {
  try {
    const signupForm = document.querySelector("#signup-form");
    signupForm.addEventListener("submit", onSignupFormSubmit);
  } catch (error) {
    console.log(error);
  }
}
signup();
