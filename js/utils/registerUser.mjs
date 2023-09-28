import { createUser } from "./createUser.mjs";
import { loginUser } from "./loginUser.mjs";
import { loginURL } from "../components/api.mjs";

export async function registerUser(url) {
  const userData = createUser();
  console.log({ userData });

  try {
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };

    const response = await fetch(url, postData);
    console.log({ response });
    const result = await response.json();
    console.log({ result });

    if (response.status === 201) {
      console.log("YES!");
      loginUser(loginURL, userData);
    } else {
      console.log("NOOO!");
      // show error message
    }
  } catch (error) {
    console.log(error);
  }
}
