import api from './apiConfig'

export async function getPosts() {
  const response = await api.get('/posts/')
  return response.data
}


export async function createPost( title, content, subject, category) {
  const response = await api.post('/posts/', {
    title, content, subject, category, 
  }, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return response.data
}

export async function deletePost(title) {
  const response = await api.delete(`/posts/${title}`)
  return response.data
}

export async function updatePost(title, content, subject, category) {
  const response = await api.put(`/posts/${title}`, {
    title, content, subject, category
  }, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return response.data
}
