import { clearStorage } from "./clearStorage.mjs";

export function logOutUser() {
  clearStorage();
  window.location.href = "/";
}
