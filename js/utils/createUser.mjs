export function createUser() {
  const userNameInput = document.querySelector("#signupUsername");
  const emailInput = document.querySelector("#signupEmail");
  const passwordInput = document.querySelector("#signupPassword");

  const newUser = {
    name: userNameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
  };

  return newUser;
}
