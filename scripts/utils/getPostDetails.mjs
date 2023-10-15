import { doFetch } from "../api/doFetch.mjs";
import { getData } from "../api/fetchOptions.mjs";
import { POST_DETAILS_URL } from "../api/api.mjs";

/**
 * Gets the details of a post by sending a GET request to the API.
 * @returns {Promise} - A promise that resolves with the response from the API.
 */
export async function getPostDetails() {
  return await doFetch(POST_DETAILS_URL, getData);
}
