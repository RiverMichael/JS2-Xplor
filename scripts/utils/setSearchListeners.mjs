import { handleOnSearch } from "./handleOnSearch.mjs";

const searchForm = document.querySelector("#searchForm");

export function setSearchListeners(searchList, parentElement) {
  searchForm.addEventListener("submit", function (event) {
    event.preventDefault();
  });

  searchForm.addEventListener("input", function (event) {
    handleOnSearch(searchList, event.target.value, parentElement);
  });
}
