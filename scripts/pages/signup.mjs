import { onSignupFormSubmit } from "../utils/onSignupFormSubmit.mjs";

const signupForm = document.querySelector("#signup-form");
signupForm.addEventListener("submit", onSignupFormSubmit);
