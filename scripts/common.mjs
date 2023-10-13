import { handleLogOutUser } from "./utils/handleLogOutUser.mjs";
import { bootstrapFormValidation } from "./components/bootstrapFormValidation.mjs";
import { checkIfLoggedIn } from "./utils/checkIfLoggedIn.mjs";
function main() {
  try {
    checkIfLoggedIn();
    bootstrapFormValidation();
    handleLogOutUser();
  } catch (error) {
    console.log(error);
  }
}
main();
