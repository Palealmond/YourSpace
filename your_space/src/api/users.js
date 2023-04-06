import api from "./apiConfig";

export async function getProfile(handle) {
  const response = await api.get(`/profiles/${handle}`)
  return response.data
}

const LOCALSTORAGE_KEY = 'token';

export async function signin(username, password) {
  const response = await api.post('/api/token', {
    username, password
  })

  localStorage.setItem(LOCALSTORAGE_KEY, response.data);

  return response.data;
}

export async function signup(username, password) {
    const response = await api.post('/api/token', {
        username, password
      })
    
      localStorage.setItem(LOCALSTORAGE_KEY, response.data);
    
      return response.data;
}