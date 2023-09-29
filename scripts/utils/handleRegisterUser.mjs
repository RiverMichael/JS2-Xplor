import { doFetch } from "./doFetch.mjs";
import { REGISTER_URL } from "./api.mjs";
import { handleUserLogin } from "./handleUserLogin.mjs";

export async function handleRegisterUser(userDetails) {
  const options = {
    method: "POST",
    body: JSON.stringify(userDetails),
  };

  const result = await doFetch(REGISTER_URL, options);
  if (result.id) {
    console.log("registration is working");
    // login and redirect to /profile/
    handleUserLogin(userDetails);
  } else {
    console.log("registration is not working");
  }
}
