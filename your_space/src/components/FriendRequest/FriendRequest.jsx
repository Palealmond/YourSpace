import React, { useState, useEffect } from "react";
import { friendRequest } from "../../api/friendship";

function FriendRequest() {
  const [friendRequests, setFriendRequests] = useState([]);

  useEffect(() => {
    friendRequest()
      .then((data) => {
        setFriendRequests(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Friend Requests</h1>
      {friendRequests.length === 0 ? (
        <p>You have no friend requests.</p>
      ) : (
        <ul>
          {friendRequests.map((friendRequest) => (
            <li key={friendRequest.id}>
              <div>
                <span>{friendRequest.from_user.username.charAt(0)}</span>
              </div>
              <div>
                <p>
                  {friendRequest.from_user.username} sent you a friend request.
                </p>
                <p>{friendRequest.created_at}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FriendRequest;
