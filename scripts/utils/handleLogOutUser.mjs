import { logOutUser } from "./logOutUser.mjs";

/**
 * Handles the logging out of a user by adding a click event listener to all logout buttons.
 */
export function handleLogOutUser() {
  const logOutButtons = document.querySelectorAll(".logout-button");
  logOutButtons.forEach((button) => {
    button.addEventListener("click", () => {
      logOutUser();
    });
  });
}
