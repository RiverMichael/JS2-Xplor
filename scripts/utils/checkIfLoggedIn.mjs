import { getFromStorage } from "./getFromStorage.js";

export function checkIfLoggedIn() {
  const accessToken = getFromStorage("accessToken");
  console.log(accessToken);

  if (accessToken) {
    window.location.href = "/profile/";
  }
}
