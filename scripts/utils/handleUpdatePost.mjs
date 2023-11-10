import { POST_DETAILS_URL } from "../api/api.mjs";
import { createUpdatedPost } from "./createUpdatedPost.mjs";
import { doFetch } from "../api/doFetch.mjs";
import { putData } from "../api/fetchOptions.mjs";

/**
 * Handles the updating of a post by sending a PUT request to the API.
 * @returns {Promise} - A promise that resolves with the response from the API.
 * @throws {Error} - If there is an error during the updating of the post.
 */
export async function handleUpdatePost() {
  try {
    const updatedPostDetails = createUpdatedPost();
    const options = putData(updatedPostDetails);
    return await doFetch(POST_DETAILS_URL, options);
  } catch (error) {
    console.log(error);
    throw new Error("Error updating post");
  }
}
