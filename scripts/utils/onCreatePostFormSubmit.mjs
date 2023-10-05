import { handleCreateNewPost } from "./handleCreateNewPost.mjs";
import { createNewPost } from "./createNewPost.js";
import { showToast } from "../components/showToast.js";

export function onCreatePostFormSubmit(event) {
  event.preventDefault();
  const postDetails = createNewPost();
  handleCreateNewPost(postDetails);

  if (handleCreateNewPost) {
    const form = document.querySelector("#form-new-post");
    const newPostValidation = document.querySelector("#newPostValidation");
    form.reset();
    showToast(newPostValidation);
  }
}
