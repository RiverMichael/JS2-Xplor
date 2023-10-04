import { getPosts } from "../utils/getPosts.mjs";

async function feed() {
  console.log("FEED SCRIPT");

  const posts = await getPosts();
  console.log({ posts });
}
feed();
