import React, { useEffect, useState } from "react";


// import { isAuthenticated } from "../../api/users";
// import { useNavigate } from "react-router-dom";
import CreateProfile from "./CreateProfile";
import { getProfile } from "../../api/profile";

function Profile() {
  const [user, setUser] = useState({});

  const getUserData = async () => {
    const profile = await getProfile(localStorage.getItem("USER_ID"));
    setUser(profile);
  };


  useEffect(() => {
    getUserData()
  }, []);

  // if (!user) {
  //   return <div>Loading...</div>;
  // }

  return (
    <>
      {user?.name ? (
        <div className="max-w-[300px] lg:max-w-[1060px]">
          <div className="profile-container bg-white border-2 border-teal-400 flex flex-col justify-between m-2 max-w-xs sm:w-1/3 ">
            <h1 className="text-lg font-bold bg-teal-400 text-white px-2">
              Hello, {user.name}
            </h1>

            <div className="top-profile-container flex flex-row h-full gap-2 pt-2 mb-4">
              {/* <div className="profile-header"> */}
              <img
                src="https://i.imgur.com/pEtjiW1.jpg"
                alt="Profile"
                className="h-1/2 w-1/2"
              />

              {/* </div> */}
              <div className="profile-actions w-full text-xs flex flex-col justify-start gap-y-4 h-full pt-8 font-bold text-lighter-blue text-purple-700 ">
                <a>Bio: {user.bio}</a>
                <a>Location: {user.location}</a>
                <a>Birthdate: {user.birthdate}</a>
              </div>
            </div>

            <div className="mb-4 flex flex-col gap-2">
              <div className="flex flex-wrap px-2 gap-x-2 w-full">
                <h1 className="font-bold">View My:</h1>
                <a className="text-lighter-blue text-purple-700">Profile</a>
                <a className="text-lighter-blue text-purple-700">Blog</a>
                <a
                  className="text-lighter-blue text-purple-700"
                  href="/friendships"
                >
                  Friends
                </a>
                <a className="text-lighter-blue text-purple-700">Forum Topics</a>
              </div>

              <div className="flex flex-wrap px-2 gap-x-2 w-full">
                <h1 className="font-bold">My Url:</h1>
                <a
                  className="text-lighter-blue text-purple-700"
                  href="http://google.com"
                >
                  http://google.com
                </a>
              </div>
            </div>
          </div>

          <div className="mail-container bg-white border-2 border-teal-400 flex flex-col justify-between m-2 max-w-xs sm:w-1/3">
            <h1 className="text-sm font-bold bg-teal-400 text-white px-2">
              My Mail
            </h1>
            <div className="grid grid-rows-2 grid-cols-2 text-lighter-blue text-purple-700 font-bold text-sm">
              <a className="pl-2" href="">
                my messages
              </a>
              <a href="">send message</a>
              <a className="pl-2" href="">
                bulletins
              </a>
              <a href="">post bulletin</a>
            </div>
          </div>

          <div className="mail-container bg-white border-2 border-teal-400 flex flex-col justify-between m-2 max-w-xs sm:w-1/3 ">
            <h1 className="text-sm font-bold px-2 text-lighter-blue text-purple-700">
              View My Profile
            </h1>
          </div>

          <div className="donation-container bg-white border-2 border-teal-400 flex flex-col justify-between m-2 max-w-xs sm:w-1/3">
            <h1 className="text-sm font-bold px-2">
              YourSpace is a small, independent social network, funded by your
              donations.
            </h1>
            <button className="text-sm font-bold px-2 bg-yellow-500 max-w-min mx-auto">
              Donate
            </button>
          </div>

          <div className="annoucement-container bg-teal-200 border-2 border-teal-200 flex flex-col justify-between m-2 max-w-xs sm:w-1/3">
            <h1 className="text-sm font-bold px-2">YourSpace Annoucements</h1>
          </div>

          <div className="annoucement-container bg-teal-200 border-2 border-green-200 flex flex-col justify-between m-2 max-w-xs sm:w-1/3">
            <h1 className="text-sm font-bold px-2">YourSpace Updates </h1>
          </div>

          <div className="flex flex-row text-sm font-bold px-2 m-2">
            <h1 className="">Your Latest Blog Entries&nbsp;</h1>
            <h1 className="text-lighter-blue text-purple-700">[New Entry]</h1>
          </div>

          <div className="mail-container bg-white border-2 border-teal-400 flex flex-col justify-between m-2 max-w-xs sm:w-1/3">
            <h1 className="text-sm font-bold bg-teal-400 text-center text-white px-2">
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </h1>
            <div className="grid grid-cols-3 text-center text-lighter-blue text-purple-700 font-bold text-sm">
              <a>Your Friends: </a>
              <a>Profile Views:</a>
              <a>Joined: </a>
            </div>
          </div>

          <div className="mail-container border-2 border-yellow-400 flex flex-col justify-between m-2 max-w-xs sm:w-1/3">
            <h1 className="text-sm font-bold bg-yellow-400 text-center text-red-600 px-2">
              Friend Requests
            </h1>
            <div className="text-center text-lighter-blue font-bold text-sm">
              <a>0 Open Friend Requests</a>
            </div>
          </div>
        </div>
      ) : (
        <CreateProfile />
      )}
    </>
  );

}

export default Profile;
