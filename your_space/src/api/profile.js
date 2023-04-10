import api from './apiConfig'

export async function getProfile() {
  const response = await api.get(`/profiles/`)
  return response.data
}


export async function createProfile ( name, bio, location, birthdate, profileImage) {
  const response = await api.post('/profiles/', {
    name,
    bio,
    location,
    birthdate,
    profileImage: 'Profile image'
  }, {
    headers: {
      'Content-Type': 'application/json'
    }
  });

  return response.data;
}


  
export async function updateProfile(id, profile) {
  const response = await api.put(`/profiles/${id}`, profile)
  return response.data
}

export async function deleteProfile(id) {
  const response = await api.delete(`/profiles/${id}`)
  return response.data
}

