import { displayPostUpdateForm } from "../components/displayPostUpdateForm.mjs";
import { getFromStorage } from "./getFromStorage.js";

export function checkIfPostAuthorIsLoggedInUser(post) {
  const postAuthor = post.author.name;
  const loggedInUser = getFromStorage("userName");

  if (postAuthor === loggedInUser) {
    displayPostUpdateForm(post);
  }
}
