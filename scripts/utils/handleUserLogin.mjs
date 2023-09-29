import { doFetch } from "./doFetch.mjs";
import { LOGIN_URL } from "./api.mjs";

export async function handleUserLogin(userDetails) {
  const options = {
    method: "POST",
    body: JSON.stringify(userDetails),
  };

  const result = await doFetch(LOGIN_URL, options);
  console.log(result);

  const accessToken = result.accessToken;
  localStorage.setItem("accessToken", accessToken);
  const userName = result.name;
  localStorage.setItem("name", userName);

  if (accessToken) {
    window.location.href = "/profile/";
  } else if (result.statusCode === 401) {
    const errorMessage = document.querySelector("#login-failed");
    errorMessage.classList.remove("visually-hidden");
  }
}
