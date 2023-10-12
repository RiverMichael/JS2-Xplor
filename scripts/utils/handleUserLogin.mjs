import { doFetch } from "./doFetch.js";
import { LOGIN_URL } from "./api.js";
import { saveToStorage } from "./saveToStorage.js";

export async function handleUserLogin(userDetails) {
  try {
    const options = {
      method: "POST",
      body: JSON.stringify(userDetails),
    };
    const result = await doFetch(LOGIN_URL, options);
    let accessToken;
    if (result.accessToken) {
      accessToken = result.accessToken;
      saveToStorage("accessToken", accessToken);
      const userName = result.name;
      saveToStorage("userName", userName);
    }

    if (accessToken) {
      window.location.href = "/profile/";
    } else if (result.statusCode === 401) {
      const errorMessage = document.querySelector("#login-failed");
      errorMessage.classList.remove("visually-hidden");
    }
  } catch (error) {
    console.log(error);
  }
}
