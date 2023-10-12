import { renderPostDetails } from "../components/render.mjs";
import { getPostDetails } from "../utils/getPostDetails.mjs";
import { createMessage } from "../components/createMessage.js";

const postContainer = document.querySelector("#post-details");
const linkGoBack = document.querySelector("#link-goBack");
linkGoBack.addEventListener("click", function () {
  history.back();
});

async function displayPost() {
  try {
    const post = await getPostDetails();
    document.title = `${post.title} | ${post.author.name} | Xplor`;
    renderPostDetails(post, postContainer);
  } catch (error) {
    console.log(error);
    createMessage(postContainer, ["alert", "alert-danger", "text-center", "fw-bold"], "There was a problem while loading this post, please try again");
  }
}
displayPost();
