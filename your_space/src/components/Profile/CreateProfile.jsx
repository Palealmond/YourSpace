import React, { useState } from "react";
import axios from "axios";

const CreateProfile = () => {
  const [formData, setFormData] = useState({
    name: "",
    bio: "",
    location: "",
    birthdate: "",
    interests: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/profile/", formData);
      console.log(response.data); // do something with the response data
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Create Your Profile</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Bio:
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Location:
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Birthdate:
          <input
            type="date"
            name="birthdate"
            value={formData.birthdate}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Interests:
          <input
            type="text"
            name="interests"
            value={formData.interests}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Save Profile</button>
      </form>
    </div>
  );
};

export default CreateProfile;
