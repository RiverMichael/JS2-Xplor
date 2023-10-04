import { handleLogOutUser } from "./utils/handleLogOutUser.mjs";
import { bootstrapFormValidation } from "./utils/bootstrapFormValidation.js";

function main() {
  try {
    bootstrapFormValidation();
    handleLogOutUser();
  } catch (error) {
    console.log(error);
  }
}
main();
