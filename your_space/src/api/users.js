import api from "./apiConfig";

const LOCALSTORAGE_KEY = "TOKEN";
const LOCALSTORAGE_ID = "USER_ID";
const LOCALSTORAGE_USER_NAME = "USER_NAME";




export async function getUser() {
  // const token = localStorage.getItem("USER_ID");
  // console.log(token);
  // return token;
  const res = await api.get(`profiles/:username`);
  console.log(res);
  return res;
}

export async function signIn(username, password) {
  const response = await api.post("/api/login/", { username, password });
  console.log(response);
  if (response.data.token) {
    localStorage.setItem(LOCALSTORAGE_KEY, response.data.token);

    if (response.data.id) {
      localStorage.setItem(LOCALSTORAGE_ID, response.data.id);
      console.log(response.data.id);
    }

    if (response.data.username) {
      localStorage.setItem(LOCALSTORAGE_USER_NAME, response.data.username);
    }

    return { login: true, message: "Logged In." };
  } else if (response.data.isUser) {
    return {
      login: false,
      message: "User does not exist, please sign up or try again",
    };
  } else if (response.data.isPassword) {
    return { login: false, message: "Password is incorrect, please try again" };
  }
}

export function isAuthenticated() {
  const token = localStorage.getItem(LOCALSTORAGE_KEY);
  const userId = localStorage.getItem(LOCALSTORAGE_ID);
  const userName = localStorage.getItem(LOCALSTORAGE_USER_NAME);
  const user = {
    token,
    userId,
    userName,
  };
  return user !== null;
}

export async function getProfile() {
  const response = await api.get(
    `/profiles/${localStorage.getItem("USER_NAME")}`
  );
  return response.data;
}

export async function signUp(username, password, email) {
  const response = await api.post("/create-user/", {
    method: "post",

    headers: {
      "Content-Type": "application/json",
    },
    username,
    email,
    password,
  });
  return response.data;
}
