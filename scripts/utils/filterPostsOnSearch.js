export function filterPostsOnSearch(posts, term) {
  const searchTerm = term.toLowerCase().trim();
  const filteredPosts = posts.filter(({ title, body, author }) => title.toLowerCase().trim().includes(searchTerm) || body.toLowerCase().trim().includes(searchTerm) || author.name.toLowerCase().trim().includes(searchTerm));
  return filteredPosts;
}
