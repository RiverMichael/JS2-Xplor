import { showToast } from "../components/showToast.mjs";
import { deletePost } from "./deletePost.mjs";

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
