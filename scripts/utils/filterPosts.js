export function filterPosts(posts, terms) {
  const filteredPosts = posts.filter((post) => terms.every((term) => post[term]));
  return filteredPosts;
}
