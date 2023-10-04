import { handleUserLogin } from "./handleUserLogin.mjs";
import { createUser } from "./createUser.js";

export function onLoginFormSubmit(event) {
  event.preventDefault();
  const userDetails = createUser();

  handleUserLogin(userDetails);
}
