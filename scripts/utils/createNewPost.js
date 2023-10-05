export function createNewPost() {
  const form = document.querySelector("#form-new-post");
  const formData = new FormData(form);

  const createPostObject = Object.fromEntries(formData.entries());

  const newPost = {
    title: createPostObject.title,
    tags: createPostObject.keywords
      .toLowerCase()
      .replace(/, /g, ",")
      .replace(/,/g, " ")
      .split(" ")
      .map((tag) => tag.trim()),
    body: createPostObject.story,
    media: createPostObject.image,
  };
  console.log({ newPost });

  return newPost;
}
