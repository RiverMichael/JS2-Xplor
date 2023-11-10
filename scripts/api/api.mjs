const API_BASE_URL = "https://api.noroff.dev/api/v1/social/";
const POSTS_BASE = `${API_BASE_URL}posts`;

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
export const author = "?_author=true";

export const REGISTER_URL = `${API_BASE_URL}auth/register`;
export const LOGIN_URL = `${API_BASE_URL}auth/login`;

export const POSTS_URL = POSTS_BASE + author;
export const POST_DETAILS_URL = POSTS_BASE + `/${id}` + author;

export const PROFILES_BASE = `${API_BASE_URL}profiles/`;
