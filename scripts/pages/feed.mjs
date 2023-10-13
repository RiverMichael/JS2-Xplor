import { renderPosts } from "../components/render.mjs";
import { getPosts } from "../utils/getPosts.mjs";
import { onCreatePostFormSubmit } from "../utils/onCreatePostFormSubmit.mjs";
import { createMessage } from "../components/createMessage.mjs";
import { clearHTML } from "../components/clearHTML.mjs";
import { onFilterFormSubmit } from "../utils/onFilterFormSubmit.mjs";
import { setSearchListeners } from "../utils/setSearchListeners.mjs";

const feedPostsContainer = document.querySelector("#feed-container");

async function feed() {
  try {
    const posts = await getPosts();
    const createNewPostForm = document.querySelector("#form-new-post");
    createNewPostForm.addEventListener("submit", onCreatePostFormSubmit);

    clearHTML(feedPostsContainer);
    renderPosts(posts, feedPostsContainer);
    setSearchListeners(posts, feedPostsContainer);
    onFilterFormSubmit(posts, feedPostsContainer);
  } catch (error) {
    console.log(error);
    createMessage(feedPostsContainer, ["alert", "alert-danger", "text-center", "mt-4", "fw-bold"], "There was a problem while loading the feed, please try again");
  }
}
feed();
