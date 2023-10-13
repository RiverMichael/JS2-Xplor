export function getFilterFormValues() {
  const filterForm = document.querySelector("#filterPostsForm");
  const checkboxValues = Array.from(filterForm.elements)
    .filter(({ type, checked }) => type === "checkbox" && checked)
    .map((key) => key.value);

  return checkboxValues;
}
