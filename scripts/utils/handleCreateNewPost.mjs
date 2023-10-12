import { POSTS_URL } from "./api.js";
import { createNewPost } from "./createNewPost.js";
import { doFetch } from "./doFetch.js";
import { postData } from "./fetchOptions.mjs";

export async function handleCreateNewPost() {
  try {
    const postDetails = createNewPost();
    const options = postData(postDetails);
    return await doFetch(POSTS_URL, options);
  } catch (error) {
    console.log(error);
  }
}
