export async function loginUser(url, userData) {
  try {
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };

    console.log({ userData });

    const response = await fetch(url, postData);
    const result = await response.json();
    const accessToken = result.accessToken;
    localStorage.setItem("accessToken", accessToken);

    if (accessToken) {
      window.location.href = "/profile/";
    } else {
      // ERROR MESSAGE
    }
  } catch (error) {
    console.log(error);
  }
}
