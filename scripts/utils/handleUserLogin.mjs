import { doFetch } from "../api/doFetch.mjs";
import { LOGIN_URL } from "../api/api.mjs";
import { saveToStorage } from "./saveToStorage.mjs";

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
      window.location.href = "/feed/";
    } else if (result.statusCode === 401) {
      const errorMessage = document.querySelector("#login-failed");
      errorMessage.classList.remove("visually-hidden");
    }
  } catch (error) {
    console.log(error);
  }
}
