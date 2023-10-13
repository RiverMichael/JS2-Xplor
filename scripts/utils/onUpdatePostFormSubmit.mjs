import { handleUpdatePost } from "./handleUpdatePost.mjs";
import { showToast } from "../components/showToast.js";
import { clearHTML } from "../components/clearHTML.js";
import { renderPostDetails } from "../components/render.mjs";
import { getPostDetails } from "./getPostDetails.mjs";

export async function onUpdatePostFormSubmit(event) {
  event.preventDefault();
  try {
    handleUpdatePost();

    const updatePostValidation = document.querySelector("#updatePostValidation");
    const updatePostForm = document.querySelector("#updatePostForm");
    updatePostForm.reset();
    showToast(updatePostValidation);

    const postDetailsContainer = document.querySelector("#post-details");
    const post = await getPostDetails();
    clearHTML(postDetailsContainer);
    renderPostDetails(post, postDetailsContainer);
    console.log("POST UPDATED");
  } catch (error) {
    console.log(error);
  }
}
