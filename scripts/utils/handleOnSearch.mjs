import { filterPostsOnSearch } from "./filterPostsOnSearch.js";
import { displayFilteredPosts } from "../components/displayFilteredPosts.mjs";

export function handleOnSearch(posts, term, parentElement) {
  const filteredPostsSearchList = filterPostsOnSearch(posts, term);
  displayFilteredPosts(filteredPostsSearchList, parentElement, "No post was found by the search");
}
