import { logOutUser } from "./logOutUser.mjs";

export function handleLogOut() {
  const logOutButtons = document.querySelectorAll(".logout-button");

  logOutButtons.forEach((button) => {
    button.addEventListener("click", () => {
      logOutUser();
    });
  });
}
