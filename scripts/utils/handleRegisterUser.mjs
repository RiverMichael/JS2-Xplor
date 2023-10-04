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
      console.log("registration is working");
      handleUserLogin(userDetails);
    } else {
      console.log("registration is not working");
    }
  } catch (error) {
    console.log(error);
  }
}
