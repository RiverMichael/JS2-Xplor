import { getFilterFormValues } from "./getFilterFormValues.js";
import { filterPosts } from "./filterPosts.mjs";
import { displayFilteredPosts } from "../components/displayFilteredPosts.mjs";

const feedPostsContainer = document.querySelector("#feed-container");

export async function handleFilterForm() {
  try {
    const termsToFilterBy = getFilterFormValues();
    const filteredPosts = await filterPosts(termsToFilterBy);
    displayFilteredPosts(filteredPosts, feedPostsContainer);
  } catch (error) {
    console.log(error);
  }
}
