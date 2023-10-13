import { POST_DETAILS_URL } from "../api/api.mjs";
import { createUpdatedPost } from "./createUpdatedPost.mjs";
import { doFetch } from "../api/doFetch.mjs";
import { putData } from "../api/fetchOptions.mjs";

export async function handleUpdatePost() {
  try {
    const updatedPostDetails = createUpdatedPost();
    const options = putData(updatedPostDetails);
    return await doFetch(POST_DETAILS_URL, options);
  } catch (error) {
    console.log(error);
  }
}
