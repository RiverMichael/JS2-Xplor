import { createPostHtml } from "./createHTML.js";

export function renderPosts(posts, parentElement) {
  posts.map((post) => {
    createPostHtml(post, parentElement);
  });
}
