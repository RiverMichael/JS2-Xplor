import { createNewUser } from "./createNewUser.js";
import { handleRegisterUser } from "./handleRegisterUser.mjs";

export function onSignupFormSubmit(event) {
  event.preventDefault();
  const userDetails = createNewUser();
  handleRegisterUser(userDetails);
}
