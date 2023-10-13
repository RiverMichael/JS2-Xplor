import { renderPostDetails } from "../components/render.mjs";
import { getPostDetails } from "../utils/getPostDetails.mjs";
import { createMessage } from "../components/createMessage.mjs";
import { checkIfPostAuthorIsLoggedInUser } from "../utils/checkIfPostAuthorIsLoggedInUser.mjs";
import { onUpdatePostFormSubmit } from "../utils/onUpdatePostFormSubmit.mjs";
import { handleDeletePost } from "../utils/handleDeletePost.mjs";
import { clearHTML } from "../components/clearHTML.mjs";

const postContainer = document.querySelector("#post-details");
const linkGoBack = document.querySelector("#link-goBack");
linkGoBack.addEventListener("click", function () {
  history.back();
});

async function displayPost() {
  try {
    const post = await getPostDetails();
    const updatePostForm = document.querySelector("#updatePostForm");
    updatePostForm.addEventListener("submit", onUpdatePostFormSubmit);
    const deletePostButton = document.querySelector("#buttonDeletePost");
    deletePostButton.addEventListener("click", handleDeletePost);

    document.title = `${post.title} | ${post.author.name} | Xplor`;

    clearHTML(postContainer);
    renderPostDetails(post, postContainer);
    checkIfPostAuthorIsLoggedInUser(post);
  } catch (error) {
    console.log(error);
    createMessage(postContainer, ["alert", "alert-danger", "text-center", "fw-bold"], "There was a problem while loading this post, please try again");
  }
}
displayPost();
