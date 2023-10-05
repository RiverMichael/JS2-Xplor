import { renderPosts } from "../components/render.mjs";
import { getPosts } from "../utils/getPosts.mjs";
import { onCreatePostFormSubmit } from "../utils/onCreatePostFormSubmit.mjs";

async function feed() {
  try {
    const posts = await getPosts();
    const feedPostsContainer = document.querySelector("#feed-container");
    const form = document.querySelector("#form-new-post");
    form.addEventListener("submit", onCreatePostFormSubmit);

    renderPosts(posts, feedPostsContainer);
  } catch (error) {
    console.log(error);
  }
}
feed();
