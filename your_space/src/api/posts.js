import api from './apiConfig'

export async function getPosts() {
  const response = await api.get('/post/')
  return response.data
}

export async function createPost( title, content, subject, category) {
  const response = await api.post('/post/', {
    title, content, subject, category, 
  }, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return response.data
}

export async function deletePost(title) {
  const response = await api.delete(`/post/${title}`)
  return response.data
}
