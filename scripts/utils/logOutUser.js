export function logOutUser() {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("name");
  window.location.href = "/";
}
