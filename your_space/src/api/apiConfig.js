import axios from 'axios'

const LOCALSTORAGE_KEY = 'TOKEN';


const api = axios.create({
  baseURL: 'https://yourspace.herokuapp.com',
})



api.interceptors.request.use(config => {
  const token = localStorage.getItem(LOCALSTORAGE_KEY)
  if (token)
    config.headers.Authorization = `Token ${token}`
  return config;
})

export default api;