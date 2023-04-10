import React, { useState, useEffect } from "react";
import {
  friendship,
  createFriendship,
  updateFriendship,
} from "../../api/friendship";

function Friendship() {
  const [friendships, setFriendships] = useState([]);
  const [currentUser, setCurrentUser] = useState("");
  const [friendUser, setFriendUser] = useState("");

  useEffect(() => {
    friendship()
      .then((data) => {
        setFriendships(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleCreateFriendship = async () => {
    try {
      const response = await createFriendship(
        currentUser.id,
        friendUser.id,
        "accepted"
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateFriendship = async (id) => {
    try {
      const updatedFriendship = await updateFriendship(
        id,
        currentUser.id,
        friendUser.id,
        "pending"
      );
      setCurrentUser(updatedFriendship.user1.id);
      setFriendUser(updatedFriendship.user2.id);
      console.log(updatedFriendship);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>My Friends</h1>
      {friendships && friendships.length > 0 ? (
        <ul>
          {friendships.map((friendship) => (
            <li key={friendship.id}>
              {friendship.user1.username} and {friendship.user2.username}
              <button onClick={() => handleUpdateFriendship(friendship.id)}>
                Update Friendship
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No friendships to display.</p>
      )}
      <button onClick={handleCreateFriendship}>Add Friend</button>
    </div>
  );
}

export default Friendship;
