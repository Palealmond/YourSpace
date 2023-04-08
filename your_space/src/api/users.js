import api from "./apiConfig";

const LOCALSTORAGE_KEY = 'TOKEN';

export async function signIn(username, password) {
  const response = await api.post('/api/login/', {username, password})
  
  if (response.data.token) {
    localStorage.setItem(LOCALSTORAGE_KEY, response.data.token);
    return response.data;
  } else if(response.data.isUser) {
    return {login: false, message: "User does not exist, please sign up or try again"}
  } else if (response.data.isPassword) {
    return {login: false, message: "Password is incorrect, please try again"}
  }
}

export function isAuthenticated() {
  const token = localStorage.getItem(LOCALSTORAGE_KEY);
  return token !== null;
}

export async function getProfile(id, body) {
  const response = await api.patch(`/profiles/${id}`, body)
  return response.data
}
