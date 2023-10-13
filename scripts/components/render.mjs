import { createPostHtml, createPostDetailsHtml } from "./createHTML.mjs";
import { clearHTML } from "./clearHTML.mjs";

export function renderPosts(posts, parentElement) {
  posts.map((post) => {
    createPostHtml(post, parentElement);
  });
}

export function renderPostDetails(post, parentElement) {
  createPostDetailsHtml(post, parentElement);
}

export function renderProfileDetails(user) {
  if (user.avatar) {
    const avatarContainer = document.querySelector("#profile-avatar");
    clearHTML(avatarContainer);

    const userAvatar = document.createElement("img");
    userAvatar.classList.add("rounded-circle", "me-2");
    userAvatar.src = user.avatar;
    userAvatar.alt = `${user.name} profile avatar`;
    avatarContainer.append(userAvatar);
  }

  const nameContainer = document.querySelector("#profile-username");
  nameContainer.innerText = user.name;

  const emailContainer = document.querySelector("#profile-useremail");
  emailContainer.innerText = user.email;

  const numberOfPostsContainer = document.querySelector("#posts-span");
  numberOfPostsContainer.innerText = user._count.posts;

  const followersContainer = document.querySelector("#followers-span");
  followersContainer.innerText = user._count.followers;

  const followingContainer = document.querySelector("#following-span");
  followingContainer.innerText = user._count.following;
}
