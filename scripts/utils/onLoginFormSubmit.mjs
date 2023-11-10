import { handleUserLogin } from "./handleUserLogin.mjs";
import { createUser } from "./createUser.mjs";

/**
 * Handles the submission of the login form by creating a new user and logging them in.
 */
export function onLoginFormSubmit(event) {
  event.preventDefault();
  const userDetails = createUser();
  handleUserLogin(userDetails);
}
