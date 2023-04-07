import React, { useState } from "react";
import axios from "axios";

const CreateProfile = () => {
  const [formData, setFormData] = useState({
    name: "",
    bio: "",
    location: "",
    birthdate: "",
    // interests: "",
  });
  const [imageFile, setImageFile] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/create-profile/", formData);
      console.log(response.data); // do something with the response data
    } catch (error) {
      console.error(error);
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImageFile(file); // Set the selected file as imageFile state
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({ ...formData, profileImage: reader.result });
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <div className="w-full h-full flex justify-center mt-12">
        <div className="max-w-md md:max-w-md h-1/3 md:h-1/3 border-2 border-blue-700 flex flex-col justify-center items-center gap-4 p-2">
          <h2 className="font-extrabold text-blue-700">Create Your Profile</h2>
          <form
            className="font-bold flex flex-col justify-center items-center px-2 mx-2"
            onSubmit={handleFormSubmit}
          >
            <label className="font-extrabold text-blue-700">
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
            <label className="font-extrabold text-blue-700">
              Bio:
              <textarea
                className="border-2 border-black mx-2 rounded-md text-black"
                name="bio"
                value={formData.bio}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label className="font-extrabold text-blue-700">
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
            <label className="font-extrabold text-blue-700">
              Birthdate:
              <input
                className="border-2 border-black mx-2 rounded-md text-black"
                type="date"
                name="birthdate"
                value={formData.birthdate}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label className="font-extrabold text-blue-700">
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