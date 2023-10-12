import { handleCreateNewPost } from "./handleCreateNewPost.mjs";
import { showToast } from "../components/showToast.js";
import { getPosts } from "./getPosts.mjs";
import { clearHTML } from "../components/clearHTML.js";
import { renderPosts } from "../components/render.mjs";

export async function onCreatePostFormSubmit(event) {
  event.preventDefault();
  try {
    handleCreateNewPost();

    const newPostValidation = document.querySelector("#newPostValidation");
    const createNewPostForm = document.querySelector("#form-new-post");
    createNewPostForm.reset();
    showToast(newPostValidation);

    const feedPostsContainer = document.querySelector("#feed-container");
    const posts = await getPosts();
    clearHTML(feedPostsContainer);
    renderPosts(posts, feedPostsContainer);
  } catch (error) {
    console.log(error);
  }
}
