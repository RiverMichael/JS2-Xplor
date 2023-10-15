import { getFromStorage } from "./getFromStorage.mjs";

/**
 * Checks if the user is logged in by checking for an access token in local storage and the current path.
 * If the user is not logged in and is not on the home page or register page, redirects to the home page.
 * If the user is logged in and is on the home page, redirects to the feed page.
 */
export function checkIfLoggedIn() {
  const accessToken = getFromStorage("accessToken");
  const currentPath = window.location.pathname;

  if (!accessToken && currentPath !== "/" && currentPath !== "/register/") {
    window.location.href = "/";
  } else if (accessToken && currentPath === "/") {
    window.location.href = "/feed/";
  }
}
