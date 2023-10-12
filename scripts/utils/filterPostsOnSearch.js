export function filterPostsOnSearch(posts, term) {
  const filteredPosts = posts.filter((post) => {
    return post["title"].toLowerCase().trim().includes(term.toLowerCase().trim());
  });

  return filteredPosts;
}
