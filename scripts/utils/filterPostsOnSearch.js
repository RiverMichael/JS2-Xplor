export function filterPostsOnSearch(posts, term) {
  const searchTerm = term.toLowerCase().trim();
  const filteredPosts = posts.filter(({ title, body }) => title.toLowerCase().trim().includes(searchTerm) || body.toLowerCase().trim().includes(searchTerm));
  return filteredPosts;
}
