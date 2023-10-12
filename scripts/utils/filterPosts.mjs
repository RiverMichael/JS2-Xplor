import { getPosts } from "./getPosts.mjs";

export async function filterPosts(terms) {
  try {
    const postsToFilter = await getPosts();
    const filteredPosts = postsToFilter.filter((post) => {
      return terms.every((term) => post[term]);
    });

    return filteredPosts;
  } catch (error) {
    console.log(error);
  }
}
