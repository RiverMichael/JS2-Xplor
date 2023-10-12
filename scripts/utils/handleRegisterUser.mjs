import { doFetch } from "./doFetch.js";
import { REGISTER_URL } from "./api.js";
import { handleUserLogin } from "./handleUserLogin.mjs";

export async function handleRegisterUser(userDetails) {
  try {
    const options = {
      method: "POST",
      body: JSON.stringify(userDetails),
    };

    const result = await doFetch(REGISTER_URL, options);
    if (result.id) {
      handleUserLogin(userDetails);
    }
  } catch (error) {
    console.log(error);
  }
}
