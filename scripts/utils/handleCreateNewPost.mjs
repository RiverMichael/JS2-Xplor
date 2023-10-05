import { POSTS_URL } from "./api.js";
import { doFetch } from "./doFetch.js";
import { postData } from "../components/fetchOptions.mjs";

export async function handleCreateNewPost(postDetails) {
  try {
    const options = postData(postDetails);
    return await doFetch(POSTS_URL, options);
  } catch (error) {
    console.log(error);
  }
}
