import { POST_DETAILS_URL } from "./api.js";
import { createUpdatedPost } from "./createUpdatedPost.mjs";
import { doFetch } from "./doFetch.js";
import { putData } from "./fetchOptions.mjs";

export async function handleUpdatePost() {
  try {
    const updatedPostDetails = createUpdatedPost();
    const options = putData(updatedPostDetails);
    return await doFetch(POST_DETAILS_URL, options);
  } catch (error) {
    console.log(error);
  }
}
