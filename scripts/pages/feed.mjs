import { getPosts } from "../utils/getPosts.mjs";
import { onCreatePostFormSubmit } from "../utils/onCreatePostFormSubmit.mjs";
import { showToast } from "../components/showToast.js";

async function feed() {
  try {
    console.log("FEED SCRIPT");

    const posts = await getPosts();
    console.log({ posts });

    const form = document.querySelector("#form-new-post");
    form.addEventListener("submit", onCreatePostFormSubmit);
  } catch (error) {
    console.log(error);
  }
}
feed();
