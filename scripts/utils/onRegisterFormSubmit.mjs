import { createNewUser } from "./createNewUser.mjs";
import { handleRegisterUser } from "./handleRegisterUser.mjs";

/**
 * Handles the submission of the registration form by creating a new user and registering them.
 */
export function onRegisterFormSubmit(event) {
  event.preventDefault();
  const userDetails = createNewUser();
  handleRegisterUser(userDetails);
}
