import React from "react";

function Profile() {
  return (
    <div className="max-w-[1060px]">
      <div className="profile-container bg-white border-2 border-blue-400 flex flex-col justify-between m-2 max-w-xs sm:w-1/3 ">
        <h1 className="text-lg font-bold bg-blue-400 text-white px-2">
          Hello, John Doe
        </h1>

        <div className="top-profile-container flex flex-row h-full gap-2 pt-2 mb-4">
          {/* <div className="profile-header"> */}
          <img
            src="https://static.spacehey.net/img/default/profilepic.png"
            alt="Profile"
            className="h-1/2 w-1/2"
          />
          {/* </div> */}
          <div className="profile-actions w-full text-xs flex flex-col justify-start gap-y-4 h-full pt-8 font-bold text-lighter-blue text-blue-700 ">
            <a
              onClick={() => console.log("Edit Profile")}
              className="underline"
            >
              Edit Profile
            </a>
            <a onClick={() => console.log("Edit Status")} className="underline">
              Edit Status
            </a>
            <a
              onClick={() => console.log("Edit/Add Photo")}
              className="underline"
            >
              Edit/Add Photo
            </a>
            <a
              onClick={() => console.log("Account Settings")}
              className="underline"
            >
              Account Settings
            </a>
          </div>
        </div>

        <div className="mb-4 flex flex-col gap-2">
          <div className="flex flex-wrap px-2 gap-x-2 w-full">
            <h1 className="font-bold">View My:</h1>
            <a className="text-lighter-blue text-blue-700">Profile</a>
            <a className="text-lighter-blue text-blue-700">Blog</a>
            <a className="text-lighter-blue text-blue-700">Friends</a>
            <a className="text-lighter-blue text-blue-700">Forum Topics</a>
          </div>

          <div className="flex flex-wrap px-2 gap-x-2 w-full">
            <h1 className="font-bold">My Url:</h1>
            <a
              className="text-lighter-blue text-blue-700"
              href="http://google.com"
            >
              http://google.com
            </a>
          </div>
        </div>
      </div>

      <div className="mail-container bg-white border-2 border-blue-400 flex flex-col justify-between m-2 max-w-xs sm:w-1/3">
        <h1 className="text-sm font-bold bg-blue-400 text-white px-2">
          My Mail
        </h1>
        <div className="grid grid-rows-2 grid-cols-2 text-lighter-blue text-blue-700 font-bold text-sm">
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

      <div className="mail-container bg-white border-2 border-blue-400 flex flex-col justify-between m-2 max-w-xs sm:w-1/3 ">
        <h1 className="text-sm font-bold px-2 text-lighter-blue text-blue-700">
          View My Profile
        </h1>
      </div>

      <div className="donation-container bg-white border-2 border-blue-400 flex flex-col justify-between m-2 max-w-xs sm:w-1/3">
        <h1 className="text-sm font-bold px-2">
          YourSpace is a small, independent social network, funded by your
          donations.
        </h1>
        <button className="text-sm font-bold px-2 bg-yellow-500 max-w-min mx-auto">
          Donate
        </button>
      </div>

      <div className="annoucement-container bg-blue-200 border-2 border-blue-200 flex flex-col justify-between m-2 max-w-xs sm:w-1/3">
        <h1 className="text-sm font-bold px-2">YourSpace Annoucements</h1>
      </div>

      <div className="annoucement-container bg-blue-200 border-2 border-blue-200 flex flex-col justify-between m-2 max-w-xs sm:w-1/3">
        <h1 className="text-sm font-bold px-2">YourSpace Updates </h1>
      </div>

      <div className="flex flex-row text-sm font-bold px-2 m-2">
        <h1 className="">Your Latest Blog Entries&nbsp;</h1>
        <h1 className="text-lighter-blue text-blue-700">[New Entry]</h1>
      </div>

      <div className="mail-container bg-white border-2 border-blue-400 flex flex-col justify-between m-2 max-w-xs sm:w-1/3">
        <h1 className="text-sm font-bold bg-blue-400 text-center text-white px-2">
          {new Date().toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </h1>
        <div className="grid grid-cols-3 text-center text-lighter-blue text-blue-700 font-bold text-sm">
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
  );
}

export default Profile;

{
  /* <div className="contact-container bg-white border-2 border-lighter-blue w-80 flex flex-col justify-between p-6 mt-6">
        <div className="contact-header mb-2 bg-blue-400 bg-blue-600 text-white px-2 h-10 flex items-center justify-between">
          <h2 className="text-lg font-bold">My Mail</h2>
          <div className="message-actions">
            <button onClick={() => console.log('Open Messages')} className="bg-lighter-blue text-white px-2 py-1 rounded-md mr-2">Messages</button>
            <button onClick={() => console.log('Send Message')} className="bg-lighter-blue text-white px-2 py-1 rounded-md">Send Message</button>
          </div>
        </div>
      </div>

      <div class="contact w-full border-2 border-lighter-blue p-4">
        <div class="url-info view-full-profile text-center">
          <button onClick={() => console.log('View Your Profile')} className="underline text-lighter-bluefont-bold text-blue-700 text-s font-bold">View Your Profile</button>
        </div>
      </div>

      <div className="new-entry-container bg-white border-2 border-lighter-blue w-80 h-96 flex flex-col justify-between p-6 ml-6">
        New entry content
      </div> */
}
