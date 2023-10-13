export function createUpdatedPost() {
  const updatePostForm = document.querySelector("#updatePostForm");
  const formData = new FormData(updatePostForm);
  const createPostObject = Object.fromEntries(formData.entries());
  const updatedPost = {};

  if (createPostObject.title) {
    updatedPost.title = createPostObject.title;
  }
  if (createPostObject.keywords) {
    updatedPost.tags = createPostObject.keywords
      .toLowerCase()
      .replace(/, /g, ",")
      .replace(/,/g, " ")
      .split(" ")
      .map((tag) => tag.trim());
  }
  if (createPostObject.story) {
    updatedPost.body = createPostObject.story;
  }
  if (createPostObject.image) {
    updatedPost.media = createPostObject.image;
  }
  return updatedPost;
}
