export const API_BASE_URL = "https://api.noroff.dev/api/v1/social/";
export const REGISTER_URL = `${API_BASE_URL}auth/register`;
export const LOGIN_URL = `${API_BASE_URL}auth/login`;
const POSTS_BASE = `${API_BASE_URL}posts`;
export const PROFILES_BASE = `${API_BASE_URL}profiles/`;

export const author = "?_author=true";
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

export const POSTS_URL = POSTS_BASE + author;
export const POST_DETAILS_URL = POSTS_BASE + `/${id}` + author;
