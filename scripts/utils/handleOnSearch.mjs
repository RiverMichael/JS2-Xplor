import { filterPostsOnSearch } from "./filterPostsOnSearch.mjs";
import { displayFilteredPosts } from "../components/displayFilteredPosts.mjs";

/**
 * Handles the filtering of posts by search term by sending a GET request to the API.
 * @param {Array} posts - An array of post objects to filter.
 * @param {string} term - The search term to filter the posts by.
 * @param {HTMLElement} parentElement - The parent element to display the filtered posts in.
 * @example
 * ```js
 * const posts = [{...}, {...}, {...}];
 * const parentElement = document.querySelector('#postList');
 * handleOnSearch(posts, 'Camping', parentElement);
 * ```
 */
export function handleOnSearch(posts, term, parentElement) {
  const filteredPostsSearchList = filterPostsOnSearch(posts, term);
  displayFilteredPosts(filteredPostsSearchList, parentElement, "No post was found by the search");
}
