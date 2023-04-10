import api from "./apiConfig";

export async function getProfile(id) {
  const response = await api.get(`/profiles/${id}`);
  console.log("-----PROFILE-----");
  console.log(response);
  return response.data;
}

export async function createProfile(data) {
  const response = await api.post("/profiles/", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    }
  });

  return response.data;
}

export async function updateProfile(id, profile) {
  const response = await api.put(`/profiles/${id}`, profile);
  return response.data;
}

export async function deleteProfile(id) {
  const response = await api.delete(`/profiles/${id}`);
  return response.data;
}
