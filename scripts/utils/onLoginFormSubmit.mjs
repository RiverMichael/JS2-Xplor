import { handleUserLogin } from "./handleUserLogin.mjs";
import { createUser } from "./createUser.mjs";

export function onLoginFormSubmit(event) {
  event.preventDefault();
  const userDetails = createUser();

  handleUserLogin(userDetails);
}