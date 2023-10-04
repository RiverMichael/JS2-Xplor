import { getFromStorage } from "../utils/getFromStorage.js";

const token = getFromStorage("accessToken");

export const getData = {
  method: "GET",
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

export const deleteData = {
  method: "DELETE",
  headers: {
    Authorization: `Bearer ${token}`,
  },
};
