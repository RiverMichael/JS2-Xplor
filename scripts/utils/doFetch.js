export async function doFetch(url, customOptions = {}) {
  try {
    const defaultOptions = {
      headers: {
        "Content-Type": "application/json",
      },
      ...customOptions,
    };
    const response = await fetch(url, defaultOptions);
    console.log({ response });

    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}
