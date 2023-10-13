import { doFetch } from "../api/doFetch.mjs";
import { getData } from "../api/fetchOptions.mjs";
import { PROFILES_BASE } from "../api/api.mjs";

export async function getProfile(userName) {
  const PROFILE_URL = PROFILES_BASE + userName;
  return await doFetch(PROFILE_URL, getData);
}
