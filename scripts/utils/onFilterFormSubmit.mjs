import { handleFilterForm } from "./handleFilterForm.mjs";

const filterForm = document.querySelector("#filterPostsForm");

/**
 * Adds an event listener to the filter form that calls the handleFilterForm function when the form is submitted.
 * @param {Array} filterList - An array of post objects to filter.
 * @param {HTMLElement} parentElement - The parent element to render the filtered list of posts in.
 * @example
 * ```js
 * const filterList = [{...}, {...}, {...}];
 * const parentElement = document.querySelector('#filtered-posts-container');
 * onFilterFormSubmit(filterList, parentElement);
 * ```
 */
export function onFilterFormSubmit(filterList, parentElement) {
  filterForm.addEventListener("submit", function (event) {
    event.preventDefault();
    handleFilterForm(filterList, parentElement);
  });
}
