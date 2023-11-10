/**
 * Creates a new user object from the data in the registration form.
 * @returns {Object} - The new user object.
 */
export function createNewUser() {
  const userNameInput = document.querySelector("#registerUsername");
  const emailInput = document.querySelector("#registerEmail");
  const passwordInput = document.querySelector("#registerPassword");

  const newUser = {
    name: userNameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
  };

  return newUser;
}
