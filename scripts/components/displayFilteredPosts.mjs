import { clearHTML } from "./clearHTML.js";
import { renderPosts } from "./render.mjs";
import { createMessage } from "./createMessage.js";

export function displayFilteredPosts(posts, parentElement, errorMessage) {
  if (posts.length) {
    clearHTML(parentElement);
    renderPosts(posts, parentElement);
  } else {
    clearHTML(parentElement);
    createMessage(parentElement, ["alert", "alert-danger", "text-center", "mt-4", "fw-bold"], errorMessage);
  }
}
