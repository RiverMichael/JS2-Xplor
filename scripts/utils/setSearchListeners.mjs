import { handleOnSearch } from "./handleOnSearch.mjs";

const searchForm = document.querySelector("#searchForm");

/**
 * Sets event listeners for the search form to handle search input and prevent form submission.
 * @param {Array} searchList - An array of objects to search through.
 * @param {HTMLElement} parentElement - The parent element to render the search results in.
 * @example
 * ```js
 * const searchList = [{...}, {...}, {...}];
 * const searchResultsContainer = document.querySelector('#search-results');
 * setSearchListeners(searchList, searchResultsContainer);
 * ```
 */
export function setSearchListeners(searchList, parentElement) {
  searchForm.addEventListener("submit", function (event) {
    event.preventDefault();
  });

  searchForm.addEventListener("input", function (event) {
    handleOnSearch(searchList, event.target.value, parentElement);
  });
}
