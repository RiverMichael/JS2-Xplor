import { createPostHtml, createPostDetailsHtml } from "./createHTML.mjs";
import { clearHTML } from "./clearHTML.mjs";

/**
 * Renders an array of posts by creating HTML for each post and appending it to a parent element.
 * @param {Array} posts - The array of posts to render.
 * @param {HTMLElement} parentElement - The parent element to append the post HTML to.
 * @example
 * ```js
 * const posts = [
 *   { id: 1, title: 'Post 1' },
 *   { id: 2, title: 'Post 2' },
 *   { id: 3, title: 'Post 3' },
 * ];
 * const parentElement = document.querySelector('#posts');
 * renderPosts(posts, parentElement);
 * ```
 */
export function renderPosts(posts, parentElement) {
  posts.map((post) => {
    createPostHtml(post, parentElement);
  });
}

/**
 * Renders the details of a single post by creating HTML for the post details and appending it to a parent element.
 * @param {Object} post - The post object to render.
 * @param {HTMLElement} parentElement - The parent element to append the post details HTML to.
 * @example
 * ```js
 * const post = { id: 1, title: 'My post' };
 * const parentElement = document.querySelector('#post-details');
 * renderPostDetails(post, parentElement);
 * ```
 */
export function renderPostDetails(post, parentElement) {
  createPostDetailsHtml(post, parentElement);
}

/**
 * Renders the details of a user's profile by updating the HTML of various elements.
 * @param {Object} user - The user object to render.
 * @example
 * ```js
 * const user = {
 *   name: 'John Doe',
 *   email: 'john.doe@example.com',
 *   avatar: 'https://example.com/avatar.jpg',
 *   _count: {
 *     posts: 10,
 *     followers: 100,
 *     following: 50
 *   }
 * };
 * renderProfileDetails(user);
 * ```
 */
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
