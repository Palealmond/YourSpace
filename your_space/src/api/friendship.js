import api from "./apiConfig";

export async function friendship() {
  try {
    const response = await api.get("/friendships/");
    const data = response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function createFriendship(user1, user2, status) {
  try {
    const response = await api.post("/friendships/", {
      user1: user1,
      user2: user2,
      status: status,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create friendship.");
  }
}

export async function updateFriendship(id, user1, user2, status) {
  try {
    const response = await api.put(`/friendships/${id}/`, {
      user1: user1,
      user2: user2,
      status: status,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to update friendship.");
  }
}

// export async function partialUpdateFriendship(id, data) {
//   try {
//     const response = await api.patch(`/friendships/${id}/`, data);
//     return response.data;
//   } catch (error) {
//     console.error(error);
//     throw new Error("Failed to partially update friendship.");
//   }
// }

export async function friendRequest(to_user, post, username) {
  try {
    const response = await api.post("/friend-requests/", {
      from_user: username,
      to_user: to_user,
      post: post,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create friend request.");
  }
}
