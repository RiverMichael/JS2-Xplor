import { getFromStorage } from "../utils/getFromStorage.mjs";

const token = getFromStorage("accessToken");

export const getData = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
};

export const deleteData = {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
};

/**
 * Creates options for a POST request with the given post details.
 * @param {Object} postDetails - The details of the post to create.
 * @returns {Object} - The options for the POST request.
 * @example
 * ```js
 * const postDetails = {
 *   title: 'New post',
 *   body: 'This is a new post',
 * };
 *
 * const options = postData(postDetails);
 * ```
 */
export function postData(postDetails) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(postDetails),
  };

  return options;
}

/**
 * Creates options for a POST request with the given post details.
 * @param {Object} updatedPostDetails - The updated details of the post.
 * @returns {Object} - The options for the PUT request.
 * @example
 * ```js
 * const updatedPostDetails = {
 *   title: 'Updated post',
 *   body: 'This is an updated post',
 * };
 *
 * const options = postData(updatedPostDetails);
 * ```
 */
export function putData(updatedPostDetails) {
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(updatedPostDetails),
  };

  return options;
}
