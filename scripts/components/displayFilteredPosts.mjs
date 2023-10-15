import { clearHTML } from "./clearHTML.mjs";
import { renderPosts } from "./render.mjs";
import { createMessage } from "./createMessage.mjs";

/**
 * Displays filtered posts in a parent element, or displays an error message if no posts are found.
 * @param {Array} posts - The filtered posts to display.
 * @param {HTMLElement} parentElement - The parent element to display the posts in.
 * @param {string} errorMessage - The error message to display if no posts are found.
 * @example
 * ```js
 * const posts = [
 *   { id: 1, title: 'Post 1' },
 *   { id: 2, title: 'Post 2' },
 *   { id: 3, title: 'Post 3' },
 * ];
 * const parentElement = document.querySelector('#posts');
 * displayFilteredPosts(posts, parentElement, 'No posts found.');
 * ```
 */
export function displayFilteredPosts(posts, parentElement, errorMessage) {
  if (posts.length) {
    clearHTML(parentElement);
    renderPosts(posts, parentElement);
  } else {
    clearHTML(parentElement);
    createMessage(parentElement, ["alert", "alert-danger", "text-center", "mt-4", "fw-bold"], errorMessage);
  }
}
