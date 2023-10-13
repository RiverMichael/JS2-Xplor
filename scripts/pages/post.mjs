import { renderPostDetails } from "../components/render.mjs";
import { getPostDetails } from "../utils/getPostDetails.mjs";
import { createMessage } from "../components/createMessage.js";
import { checkIfPostAuthorIsLoggedInUser } from "../utils/checkIfPostAuthorIsLoggedInUser.mjs";
import { onUpdatePostFormSubmit } from "../utils/onUpdatePostFormSubmit.mjs";

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

    document.title = `${post.title} | ${post.author.name} | Xplor`;

    renderPostDetails(post, postContainer);
    checkIfPostAuthorIsLoggedInUser(post);
  } catch (error) {
    console.log(error);
    createMessage(postContainer, ["alert", "alert-danger", "text-center", "fw-bold"], "There was a problem while loading this post, please try again");
  }
}
displayPost();
