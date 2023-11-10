import { handleCreateNewPost } from "./handleCreateNewPost.mjs";
import { showToast } from "../components/showToast.mjs";
import { getPosts } from "./getPosts.mjs";
import { clearHTML } from "../components/clearHTML.mjs";
import { renderPosts } from "../components/render.mjs";

/**
 * Handles the submission of the create post form by creating a new post, displaying a success message, and rendering the updated list of posts.
 * @example
 * ```js
 * const createPostForm = document.querySelector('#form-new-post');
 * createPostForm.addEventListener('submit', onCreatePostFormSubmit);
 * ```
 */
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
