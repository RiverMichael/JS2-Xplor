/**
 * Filters an array of posts based on a search term.
 * @param {Array} posts - The array of posts to filter.
 * @param {string} term - The search term to filter by.
 * @returns {Array} - The filtered array of posts.
 * @example
 * ```js
 * const posts = [
 *   { title: 'First post', body: 'This is the first post', author: { name: 'John' } },
 *   { title: 'Second post', body: 'This is the second post', author: { name: 'Jane' } },
 *   { title: 'Third post', body: 'This is the third post', author: { name: 'John' } }
 * ];
 * const filteredPosts = filterPostsOnSearch(posts, 'second');
 * console.log(filteredPosts);
 * // Output: [{ title: 'Second post', body: 'This is the second post', author: { name: 'Jane' } }]
 * ```
 */
export function filterPostsOnSearch(posts, term) {
  const searchTerm = term.toLowerCase().trim();
  const filteredPosts = posts.filter(({ title, body, author }) => title.toLowerCase().trim().includes(searchTerm) || body.toLowerCase().trim().includes(searchTerm) || author.name.toLowerCase().trim().includes(searchTerm));
  return filteredPosts;
}
