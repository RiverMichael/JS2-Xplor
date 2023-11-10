/**
 * Displays the post update form by removing the "visually-hidden" class from the form container.
 */
export function displayPostUpdateForm() {
  const postUpdateForm = document.querySelector("#editPostContainer");
  postUpdateForm.classList.remove("visually-hidden");
}
