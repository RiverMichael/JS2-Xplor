import { doFetch } from "../api/doFetch.mjs";
import { getData } from "../api/fetchOptions.mjs";
import { PROFILES_BASE, author } from "../api/api.mjs";

export async function getProfilePosts(userName) {
  const PROFILE_POSTS_URL = PROFILES_BASE + `${userName}/posts${author}`;
  return await doFetch(PROFILE_POSTS_URL, getData);
}
