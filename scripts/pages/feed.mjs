import { getPosts } from "../utils/getPosts.mjs";
import { onCreatePostFormSubmit } from "../utils/onCreatePostFormSubmit.mjs";

async function feed() {
  try {
    const posts = await getPosts();
    console.log({ posts });

    const form = document.querySelector("#form-new-post");
    form.addEventListener("submit", onCreatePostFormSubmit);
  } catch (error) {
    console.log(error);
  }
}
feed();
