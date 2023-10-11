import { createPostHtml, createPostDetailsHtml } from "./createHTML.js";

export function renderPosts(posts, parentElement) {
  posts.map((post) => {
    createPostHtml(post, parentElement);
  });
}

export function renderPostDetails(post, parentElement) {
  createPostDetailsHtml(post, parentElement);
}
