import { logOutUser } from "./logOutUser.js";

export function handleLogOutUser() {
  const logOutButtons = document.querySelectorAll(".logout-button");

  logOutButtons.forEach((button) => {
    button.addEventListener("click", () => {
      logOutUser();
    });
  });
}
