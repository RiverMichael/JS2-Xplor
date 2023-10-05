import { doFetch } from "./doFetch.js";
import { getData } from "./fetchOptions.mjs";
import { POSTS_URL } from "./api.js";

export async function getPosts() {
  return await doFetch(POSTS_URL, getData);
}
