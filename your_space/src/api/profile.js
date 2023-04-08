import api from './apiConfig'

export async function getProfile(id) {
  const response = await api.get(`/profiles/${id}`)
  return response.data
}
