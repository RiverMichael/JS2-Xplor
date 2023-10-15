import { doFetch } from "../api/doFetch.mjs";
import { getData } from "../api/fetchOptions.mjs";
import { POSTS_URL } from "../api/api.mjs";

/**
 * Gets a list of posts by sending a GET request to the API.
 * @returns {Promise} - A promise that resolves with the response from the API.
 */
export async function getPosts() {
  return await doFetch(POSTS_URL, getData);
}
