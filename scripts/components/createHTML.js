export function createPostHtml(post, parentElement) {
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("col-12", "col-lg-6", "col-xxl-4");

  const cardLink = document.createElement("a");
  cardLink.classList.add("link-light", "link-underline-opacity-0", "link-opacity-0-hover");
  cardLink.href = `post.html?id=${post.id}`;
  cardContainer.append(cardLink);

  const card = document.createElement("div");
  card.classList.add("card", "bg-dark", "text-white", "rounded-4", "shadow");
  cardLink.append(card);

  const cardHeader = document.createElement("div");
  cardHeader.classList.add("card-header", "d-flex", "align-items-center");
  card.append(cardHeader);

  if (post.author.avatar) {
    const cardProfileAvatar = document.createElement("img");
    cardProfileAvatar.classList.add("profile-image", "rounded-circle", "me-2");
    cardProfileAvatar.src = post.author.avatar;
    cardProfileAvatar.alt = `${post.author.name} profile avatar`;
    cardHeader.append(cardProfileAvatar);
  }

  const cardProfileName = document.createElement("p");
  cardProfileName.classList.add("m-0");
  cardProfileName.innerText = post.author.name;
  cardHeader.append(cardProfileName);

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  card.append(cardBody);

  if (post.media) {
    const cardImage = document.createElement("img");
    cardImage.classList.add("card-img", "mb-2");
    cardImage.src = post.media;
    cardImage.alt = post.title;
    cardBody.append(cardImage);
  }

  const cardTitle = document.createElement("h2");
  cardTitle.classList.add("card-title", "fs-5", "my-3");
  cardTitle.innerText = post.title;
  cardBody.append(cardTitle);

  const cardTagsContainer = document.createElement("div");
  cardTagsContainer.classList.add("d-flex", "gap-2");
  cardBody.append(cardTagsContainer);

  post.tags.forEach((tag) => {
    const cardTag = document.createElement("p");
    cardTag.classList.add("card-text", "text-white", "fst-italic");
    cardTag.innerText = tag;

    cardTagsContainer.append(cardTag);
  });

  parentElement.append(cardContainer);
}
