import { doFetch } from "../api/doFetch.mjs";
import { getData } from "../api/fetchOptions.mjs";
import { POST_DETAILS_URL } from "../api/api.mjs";

export async function getPostDetails() {
  return await doFetch(POST_DETAILS_URL, getData);
}
