import React, { useState } from "react";
import { createProfile } from "../../api/profile.js";


const CreateProfile = () => {
  const [formData, setFormData] = useState({
    name: "",
    bio: "",
    location: "",
    birthdate: "",
    profileImage: null,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const formDataObj = new FormData();
      formDataObj.append('name', formData.name);
      formDataObj.append('bio', formData.bio);
      formDataObj.append('location', formData.location);
      formDataObj.append('birthdate', formData.birthdate);
      formDataObj.append('profileImage', formData.profileImage);


      await createProfile(formDataObj);

    } catch (error) {
      console.log(error);
    }
    window.location.reload();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setFormData({ ...formData, profileImage: file });
  };

  return (
    <div>
      <div className="w-full h-full flex justify-center mt-12">
        <div className="max-w-md md:max-w-md h-1/3 md:h-1/3 border-2 border-purple-700 flex flex-col justify-center items-center gap-4 p-2">
          <h2 className="font-extrabold text-purple-700">Create Your Profile</h2>
          <form
            className="font-bold flex flex-col justify-center items-center px-2 mx-2"
            onSubmit={handleFormSubmit}
          >
            <label className="font-extrabold text-purple-700">
              Name:
              <input
                className="border-2 border-black mx-2 rounded-md text-black"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label className="font-extrabold text-purple-700">
              Bio:
              <textarea
                className="border-2 border-black mx-2 rounded-md text-black"
                name="bio"
                value={formData.bio}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label className="font-extrabold text-purple-700">
              Location:
              <input
                className="border-2 border-black mx-2 rounded-md text-black"
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label className="font-extrabold text-purple-700">
              Birthdate:
              <input
                className="border-2 border-black mx-2 rounded-md text-black"
                type="date"
                name="birthdate"
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label className="font-extrabold text-purple-700">
              Profile Image:
              <input
                className="border-2 border-black mx-2 rounded-md text-black"
                type="file"
                name="profileImage"
                accept="image/*"
                onChange={handleImageChange}
              />
            </label>
            <br />
            <button className="bg-teal-500 rounded-md py-2 px-4" type="submit">
              Save Profile
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProfile;