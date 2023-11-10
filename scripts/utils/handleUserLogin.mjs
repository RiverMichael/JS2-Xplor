import { doFetch } from "../api/doFetch.mjs";
import { LOGIN_URL } from "../api/api.mjs";
import { saveToStorage } from "./saveToStorage.mjs";
import { postData } from "../api/fetchOptions.mjs";

/**
 * Handles the login of a user by sending a POST request to the API.
 * @param {Object} userDetails - An object containing the details of the user to login.
 * @example
 * ```js
 * const userDetails = {
 * email: 'johndoe@stud.noroff.no',
 * password: 'password123'
 * };
 *
 *handleUserLogin(userDetails);
 ```
 */
export async function handleUserLogin(userDetails) {
  try {
    const options = postData(userDetails);
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
