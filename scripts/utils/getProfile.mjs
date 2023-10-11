import { doFetch } from "./doFetch.js";
import { getData } from "./fetchOptions.mjs";
import { PROFILES_BASE } from "./api.js";

export async function getProfile(userName) {
  const PROFILE_URL = PROFILES_BASE + userName;
  return await doFetch(PROFILE_URL, getData);
}
