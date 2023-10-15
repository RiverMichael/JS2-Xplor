import { doFetch } from "../api/doFetch.mjs";
import { REGISTER_URL } from "../api/api.mjs";
import { handleUserLogin } from "./handleUserLogin.mjs";
import { showToast } from "../components/showToast.mjs";
import { postData } from "../api/fetchOptions.mjs";

/**
 * Handles the registration of a new user by sending a POST request to the API.
 * @param {Object} userDetails - An object containing the details of the user to register.
 * @example
 * ```js
 * const userDetails = {
 *   username: 'john_doe',
 *   password: 'password123',
 *   email: 'john_doe@example.com'
 * };
 * handleRegisterUser(userDetails);
 * ```
 */
export async function handleRegisterUser(userDetails) {
  const registrationValidation = document.querySelector("#registrationValidation");

  try {
    const options = postData(userDetails);
    const result = await doFetch(REGISTER_URL, options);
    if (result.id) {
      showToast(registrationValidation);
      setTimeout(() => {
        handleUserLogin(userDetails);
      }, 2000);
    }
  } catch (error) {
    console.log(error);
  }
}
