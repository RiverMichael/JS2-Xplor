import { handleLogOutUser } from "./utils/handleLogOutUser.mjs";
import { bootstrapFormValidation } from "./components/bootstrapFormValidation.mjs";
import { checkIfLoggedIn } from "./utils/checkIfLoggedIn.mjs";

/**
 * Initializes the application by checking if the user is logged in, setting up form validation, and handling user logout.
 */
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
