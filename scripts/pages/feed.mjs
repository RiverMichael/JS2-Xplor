import { renderPosts } from "../components/render.mjs";
import { getPosts } from "../utils/getPosts.mjs";
import { onCreatePostFormSubmit } from "../utils/onCreatePostFormSubmit.mjs";
import { createMessage } from "../components/createMessage.js";
import { clearHTML } from "../components/clearHTML.js";
import { onFilterFormSubmit } from "../utils/onFilterFormSubmit.mjs";

const feedPostsContainer = document.querySelector("#feed-container");

const filterSelect = document.querySelector("#filterPostsForm");
filterSelect.addEventListener("submit", onFilterFormSubmit);

async function feed() {
  try {
    const posts = await getPosts();
    const form = document.querySelector("#form-new-post");
    form.addEventListener("submit", onCreatePostFormSubmit);
    clearHTML(feedPostsContainer);
    renderPosts(posts, feedPostsContainer);
  } catch (error) {
    console.log(error);
    createMessage(feedPostsContainer, ["alert", "alert-danger", "text-center", "mt-4", "fw-bold"], "There was a problem while loading the feed, please try again");
  }
}
feed();
