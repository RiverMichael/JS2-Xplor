import { getFromStorage } from "./getFromStorage.js";

export function checkIfLoggedIn() {
  const accessToken = getFromStorage("accessToken");
  const currentPath = window.location.pathname;

  if (!accessToken && currentPath !== "/" && currentPath !== "/signup/") {
    window.location.href = "/";
  } else if (accessToken && currentPath === "/") {
    window.location.href = "/profile/";
  }
}
