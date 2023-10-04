export function checkIfLoggedIn() {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    window.location.href = "/profile/";
  }
}
