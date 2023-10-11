import { renderPostDetails } from "../components/render.mjs";
import { getPostDetails } from "../utils/getPostDetails.mjs";

async function post() {
  try {
    const post = await getPostDetails();
    console.log({ post });

    document.title = `${post.title} | ${post.author.name} | Xplor`;
    // Render post details
  } catch (error) {
    console.log(error);
  }
}
post();
