import { getProfile } from "../utils/getProfile.mjs";
import { getFromStorage } from "../utils/getFromStorage.js";
import { renderProfileDetails, renderPosts as renderProfilePosts } from "../components/render.mjs";
import { getProfilePosts } from "../utils/getProfilePosts.mjs";
import { createMessage } from "../components/createMessage.js";

const postsContainer = document.querySelector("#profile-posts");

async function displayProfile() {
  try {
    const userName = getFromStorage("userName");
    console.log({ userName });

    const profileData = await getProfile(userName);
    const posts = await getProfilePosts(userName);

    renderProfileDetails(profileData);
    renderProfilePosts(posts, postsContainer);
  } catch (error) {
    console.log(error);
    createMessage(postsContainer, ["alert", "alert-danger", "text-center", "fw-bold"], "There was a problem while loading this profile, please try again");
  }
}
displayProfile();
