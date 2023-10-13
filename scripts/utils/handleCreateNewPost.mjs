import { POSTS_URL } from "../api/api.mjs";
import { createNewPost } from "./createNewPost.mjs";
import { doFetch } from "../api/doFetch.mjs";
import { postData } from "../api/fetchOptions.mjs";

export async function handleCreateNewPost() {
  try {
    const postDetails = createNewPost();
    const options = postData(postDetails);
    return await doFetch(POSTS_URL, options);
  } catch (error) {
    console.log(error);
  }
}
