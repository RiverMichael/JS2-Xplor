export function createUser() {
  const emailInput = document.querySelector("#loginEmail");
  const passwordInput = document.querySelector("#loginPassword");

  const user = {
    email: emailInput.value,
    password: passwordInput.value,
  };

  return user;
}
