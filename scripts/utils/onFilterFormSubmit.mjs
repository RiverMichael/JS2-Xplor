import { handleFilterForm } from "./handleFilterForm.mjs";

export function onFilterFormSubmit(event) {
  event.preventDefault();
  handleFilterForm();
}
