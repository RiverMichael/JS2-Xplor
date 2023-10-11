import { doFetch } from "./doFetch.js";
import { getData } from "./fetchOptions.mjs";
import { PROFILES_BASE, author } from "./api.js";

export async function getProfilePosts(userName) {
  const PROFILE_POSTS_URL = PROFILES_BASE + `${userName}/posts${author}`;
  return await doFetch(PROFILE_POSTS_URL, getData);
}
