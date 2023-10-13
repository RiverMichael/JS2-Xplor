import { doFetch } from "../api/doFetch.mjs";
import { REGISTER_URL } from "../api/api.mjs";
import { handleUserLogin } from "./handleUserLogin.mjs";
import { showToast } from "../components/showToast.mjs";

export async function handleRegisterUser(userDetails) {
  const registrationValidation = document.querySelector("#registrationValidation");

  try {
    const options = {
      method: "POST",
      body: JSON.stringify(userDetails),
    };

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
