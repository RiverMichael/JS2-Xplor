import { handleLogOutUser } from "./utils/handleLogOutUser.mjs";
import { bootstrapFormValidation } from "./utils/bootstrapFormValidation.mjs";

function app() {
  bootstrapFormValidation();
  handleLogOutUser();
}
app();
