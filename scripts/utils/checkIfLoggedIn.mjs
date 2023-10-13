import { getFromStorage } from "./getFromStorage.mjs";

export function checkIfLoggedIn() {
  const accessToken = getFromStorage("accessToken");
  const currentPath = window.location.pathname;

  if (!accessToken && currentPath !== "/" && currentPath !== "/register/") {
    window.location.href = "/";
  } else if (accessToken && currentPath === "/") {
    window.location.href = "/feed/";
  }
}
