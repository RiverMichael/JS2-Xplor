/**
 * Gets the values of the checked checkboxes in the filter posts form.
 * @returns {Array} - An array of strings representing the values of the checked checkboxes.
 */
export function getFilterFormValues() {
  const filterForm = document.querySelector("#filterPostsForm");
  const checkboxValues = Array.from(filterForm.elements)
    .filter(({ type, checked }) => type === "checkbox" && checked)
    .map((key) => key.value);

  return checkboxValues;
}
