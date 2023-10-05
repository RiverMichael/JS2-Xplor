import { getFromStorage } from "./getFromStorage.js";

export function checkIfLoggedIn() {
  const accessToken = getFromStorage("accessToken");

  if (accessToken) {
    window.location.href = "/profile/";
  }
}
