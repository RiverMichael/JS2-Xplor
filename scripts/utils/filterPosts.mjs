/**
 * Filters an array of posts based on set filter terms.
 * @param {Array} posts - The array of posts to filter.
 * @param {Array} terms - The array of terms to filter by.
 * @returns {Array} - The filtered array of posts.
 * @example
 * ```js
 * const posts = [
 *   { title: 'First post', body: 'This is the first post', author: { name: 'John' } },
 *   { title: 'Second post', body: 'This is the second post', author: { name: 'Jane' } },
 *   { title: 'Third post', author: { name: 'John' } }
 * ];
 * const filteredPosts = filterPosts(posts, ['title', 'body']);
 * console.log(filteredPosts);
 * // Output: [
 * //   { title: 'First post', body: 'This is the first post', author: { name: 'John' } },
 * //   { title: 'Second post', body: 'This is the second post', author: { name: 'Jane' } },
 * // ]
 * ```
 */
export function filterPosts(posts, terms) {
  const filteredPosts = posts.filter((post) => terms.every((term) => post[term]));
  return filteredPosts;
}
