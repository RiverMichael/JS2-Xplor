import { clearStorage } from "./clearStorage.mjs";

/**
 * Logs out the current user by clearing the local storage and redirecting to the home page.
 */
export function logOutUser() {
  clearStorage();
  window.location.href = "/";
}
