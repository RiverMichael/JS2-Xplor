import { doFetch } from "../api/doFetch.mjs";
import { getData } from "../api/fetchOptions.mjs";
import { PROFILES_BASE } from "../api/api.mjs";

/**
 * Gets the profile of a user by sending a GET request to the API.
 * @param {string} userName - The username of the user to get the profile for.
 * @returns {Promise} - A promise that resolves with the response from the API.
 * @example
 * ```js
 * const userName = 'John';
 * getProfile(userName);
 * ```
 */
export async function getProfile(userName) {
  const PROFILE_URL = PROFILES_BASE + userName;
  return await doFetch(PROFILE_URL, getData);
}
