import { doFetch } from "./doFetch.js";
import { deleteData } from "../components/fetchOptions.mjs";
import { POST_DETAILS_URL } from "./api.js";

export async function deletePost() {
  return await doFetch(POST_DETAILS_URL, deleteData);
}
