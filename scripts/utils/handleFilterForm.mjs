import { getFilterFormValues } from "./getFilterFormValues.mjs";
import { filterPosts } from "./filterPosts.mjs";
import { displayFilteredPosts } from "../components/displayFilteredPosts.mjs";

export function handleFilterForm(posts, parentElement) {
  const termsToFilterBy = getFilterFormValues();
  const filteredPosts = filterPosts(posts, termsToFilterBy);
  displayFilteredPosts(filteredPosts, parentElement, "No post was found using the filter(s)");
}
