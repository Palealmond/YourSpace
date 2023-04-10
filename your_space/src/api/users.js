import api from "./apiConfig";

const LOCALSTORAGE_KEY = 'TOKEN';
const LOCALSTORAGE_ID = 'USER_ID';
const LOCALSTORAGE_USER_NAME = 'USER_NAME';



export function getUser() {
  const token = localStorage.getItem(LOCALSTORAGE_KEY);
  return token;
}


export async function signIn(username, password) {
  const response = await api.post('/api/login/', {username, password})
  
  if (response.data.token) {
    localStorage.setItem(LOCALSTORAGE_KEY, response.data.token);
    
    if (response.data.id) {
      localStorage.setItem(LOCALSTORAGE_ID, response.data.id);
      console.log(response.data.id);
    }
  
    if (response.data.username) {
      localStorage.setItem(LOCALSTORAGE_USER_NAME, response.data.username);
    }

    return response.data;

  } else if(response.data.isUser) {
    return {login: false, message: "User does not exist, please sign up or try again"}
  } else if (response.data.isPassword) {
    return {login: false, message: "Password is incorrect, please try again"}
  }
}


export function isAuthenticated() {
  const token = localStorage.getItem(LOCALSTORAGE_KEY);
  const userId = localStorage.getItem(LOCALSTORAGE_ID);
  const userName = localStorage.getItem(LOCALSTORAGE_USER_NAME);
  const user = {
    token,
    userId,
    userName
  }
  return user !== null;
}

export async function getProfile(id, body) {
  const response = await api.patch(`/profiles/${id}`, body)
  return response.data
}

export async function signUp(username, password, email) {
  const response = await api.post('/create-user/', {
    method: 'post',

    headers: {
    'Content-Type': 'application/json'
  },
    username,
    email,
    password
  })
  return response.data  

} 