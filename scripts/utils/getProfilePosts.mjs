import { doFetch } from "../api/doFetch.mjs";
import { getData } from "../api/fetchOptions.mjs";
import { PROFILES_BASE, author } from "../api/api.mjs";

/**
 * Gets a list of posts for a user's profile by sending a GET request to the API.
 * @param {string} userName - The username of the user to get the posts for.
 * @returns {Promise} - A promise that resolves with the response from the API.
 * @example
 * const userName = 'John';
 * getProfilePosts(userName);
 */
export async function getProfilePosts(userName) {
  const PROFILE_POSTS_URL = PROFILES_BASE + `${userName}/posts${author}`;
  return await doFetch(PROFILE_POSTS_URL, getData);
}
