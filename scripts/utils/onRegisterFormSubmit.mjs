import { createNewUser } from "./createNewUser.mjs";
import { handleRegisterUser } from "./handleRegisterUser.mjs";

export function onRegisterFormSubmit(event) {
  event.preventDefault();
  const userDetails = createNewUser();
  handleRegisterUser(userDetails);
}
