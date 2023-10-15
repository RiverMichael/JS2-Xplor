import { getFilterFormValues } from "./getFilterFormValues.mjs";
import { filterPosts } from "./filterPosts.mjs";
import { displayFilteredPosts } from "../components/displayFilteredPosts.mjs";

/**
 * Handles the filtering of posts by sending a GET request to the API.
 * @param {Array} posts - An array of post objects to filter.
 * @param {HTMLElement} parentElement - The parent element to display the filtered posts in.
 * @example
 * ```js
 * const posts = [{...}, {...}, {...}];
 * const parentElement = document.querySelector('#postList');
 * handleFilterForm(posts, parentElement);
 * ```
 */
export function handleFilterForm(posts, parentElement) {
  const termsToFilterBy = getFilterFormValues();
  const filteredPosts = filterPosts(posts, termsToFilterBy);
  displayFilteredPosts(filteredPosts, parentElement, "No post was found using the filter(s)");
}
