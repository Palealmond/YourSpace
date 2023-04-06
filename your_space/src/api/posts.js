import api from './apiConfig'

export async function getPosts() {
  const response = await api.get('/post/')
  return response.data
}

export async function createPost(username, email, post) {
  const response = await api.post('/post/', {
    username,email, post
  })
  return response.data
}
