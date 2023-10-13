import { doFetch } from "../api/doFetch.mjs";
import { getData } from "../api/fetchOptions.mjs";
import { POSTS_URL } from "../api/api.mjs";

export async function getPosts() {
  return await doFetch(POSTS_URL, getData);
}
