import { handleFilterForm } from "./handleFilterForm.mjs";

const filterForm = document.querySelector("#filterPostsForm");

export function onFilterFormSubmit(filterList, parentElement) {
  filterForm.addEventListener("submit", function (event) {
    event.preventDefault();
    handleFilterForm(filterList, parentElement);
  });
}
