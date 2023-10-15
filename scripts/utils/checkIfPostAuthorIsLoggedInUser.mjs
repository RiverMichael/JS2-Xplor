import { displayPostUpdateForm } from "../components/displayPostUpdateForm.mjs";
import { getFromStorage } from "./getFromStorage.mjs";

/**
 * Checks if the logged in user is the author of a post and displays the post update form if they are.
 * @param {Object} post - The post object to check.
 * @example
 * ```js
 * const post = { id: 1, title: 'My post', author: { name: 'John Doe' } };
 * checkIfPostAuthorIsLoggedInUser(post);
 * ```
 */ export function checkIfPostAuthorIsLoggedInUser(post) {
  const postAuthor = post.author.name;
  const loggedInUser = getFromStorage("userName");

  if (postAuthor === loggedInUser) {
    displayPostUpdateForm(post);
  }
}
