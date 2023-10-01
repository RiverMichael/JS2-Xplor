import { handleLogOut } from "./utils/handleLogOut.mjs";
import { bootstrapFormValidation } from "./utils/bootstrapFormValidation.mjs";

function app() {
  bootstrapFormValidation();
  handleLogOut();
}
app();
