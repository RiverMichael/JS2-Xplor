import { clearStorage } from "./clearStorage.js";

export function logOutUser() {
  clearStorage();
  window.location.href = "/";
}
