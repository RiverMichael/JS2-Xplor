import { onLoginFormSubmit } from "../utils/onLoginFormSubmit.mjs";

const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", onLoginFormSubmit);
