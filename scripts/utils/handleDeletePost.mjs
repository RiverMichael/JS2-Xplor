import { showToast } from "../components/showToast.mjs";
import { deletePost } from "./deletePost.mjs";

/**
 * Handles the deletion of a post by sending a DELETE request to the API.
 * Displays a toast validation message and relocates to the profile page on success.
 */
export function handleDeletePost() {
  const userPrompt = window.confirm("This action will DELETE this post! Are you sure?");

  if (userPrompt === true) {
    const deletePostValidation = document.querySelector("#deletePostValidation");
    deletePost();
    showToast(deletePostValidation);

    setTimeout(() => {
      window.location.href = "/profile/";
    }, 2000);
  }
}
