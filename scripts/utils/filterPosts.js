export function filterPosts(posts, terms) {
  const filteredPosts = posts.filter((post) => {
    return terms.every((term) => post[term]);
  });

  return filteredPosts;
}
