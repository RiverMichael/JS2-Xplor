import { clearHTML } from "./clearHTML.js";
import { renderPosts } from "./render.mjs";
import { createMessage } from "./createMessage.js";

export function displayFilteredPosts(posts, parentElement) {
  try {
    clearHTML(parentElement);
    renderPosts(posts, parentElement);
  } catch (error) {
    console.log(error);
    clearHTML(parentElement);
    createMessage(parentElement, ["alert", "alert-danger", "text-center", "mt-4", "fw-bold"], "There was an error while filtering the posts, please try again");
  }
}
