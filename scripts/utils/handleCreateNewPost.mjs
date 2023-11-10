import { POSTS_URL } from "../api/api.mjs";
import { createNewPost } from "./createNewPost.mjs";
import { doFetch } from "../api/doFetch.mjs";
import { postData } from "../api/fetchOptions.mjs";

/**
 * Handles the creation of a new post by sending a POST request to the API.
 * @returns {Promise} - A promise that resolves with the response from the API.
 * @throws {Error} - If there is an error during the creation of the post.
 */
export async function handleCreateNewPost() {
  try {
    const postDetails = createNewPost();
    const options = postData(postDetails);
    return await doFetch(POSTS_URL, options);
  } catch (error) {
    console.log(error);
    throw new Error("Error creating new post");
  }
}
