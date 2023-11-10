import { doFetch } from "../api/doFetch.mjs";
import { deleteData } from "../api/fetchOptions.mjs";
import { POST_DETAILS_URL } from "../api/api.mjs";

/**
 * Deletes a post by sending a DELETE request to the API.
 * @returns {Promise} - A promise that resolves with the response from the API.
 */
export async function deletePost() {
  return await doFetch(POST_DETAILS_URL, deleteData);
}
