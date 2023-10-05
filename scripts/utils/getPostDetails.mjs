import { doFetch } from "./doFetch.js";
import { getData } from "../components/fetchOptions.mjs";
import { POST_DETAILS_URL } from "./api.js";

export async function getPostDetails() {
  return await doFetch(POST_DETAILS_URL, getData);
}
