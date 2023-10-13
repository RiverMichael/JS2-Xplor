import { doFetch } from "../api/doFetch.mjs";
import { deleteData } from "../api/fetchOptions.mjs";
import { POST_DETAILS_URL } from "../api/api.mjs";

export async function deletePost() {
  return await doFetch(POST_DETAILS_URL, deleteData);
}
