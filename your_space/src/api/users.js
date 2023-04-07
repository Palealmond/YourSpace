import api from "./apiConfig";

export async function getProfile(id) {
  const response = await api.get(`/profiles/${id}`)
  return response.data
}

const LOCALSTORAGE_KEY = 'token';
const LOCALSTORAGE_ID = 'id';
const LOCALSTORAGE_USERNAME = 'username';

export async function signin({ username, password }) {
  const response = await api.post('/api/login/', {
    username, password
  })

  console.log("token:" + response.data.token)

  localStorage.setItem(LOCALSTORAGE_ID, response.data.id);
  localStorage.setItem(LOCALSTORAGE_USERNAME, response.data.username);
  localStorage.setItem(LOCALSTORAGE_KEY, response.data.token);

  return response.data;
}

export async function signup(username, password) {
  const response = await api.post('/create-user/', {
    username, password
  })

  localStorage.setItem(LOCALSTORAGE_KEY, response.data);

  return response.data;
}

export async function isAuthenticated() {
  console.log(localStorage.getItem("LOCALSTORAGE_KEY"));
  if (LOCALSTORAGE_KEY) {
    return true;
  } else {
    return false;
  }
}