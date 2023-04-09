import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../../api/apiConfig';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await api.signup('/create-user/', formData);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full h-full flex justify-center mt-12">
      <div className="w-7/8 max-w-md h-1/3 border-2 border-blue-700 flex flex-col justify-center items-center gap-4 p-2">
        <h2 className="font-extrabold text-blue-700">Sign Up</h2>
        <form
          className="font-bold flex flex-col items-center px-2 mx-2"
          onSubmit={handleFormSubmit}
        >
          <label>
            Username:
            <input
              className="border-2 border-black mx-2 rounded-md"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label className="ml-9">
            Email:
            <input
              className="border-2 border-black mx-2 rounded-md"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              className="border-2 border-black mx-2 rounded-md"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <div className="w-full text-center">
            <button className="bg-teal-500 rounded-md py-2 px-4" type="submit">
              Submit
            </button>
          </div>
        </form>
        <span>
          <Link className="text-blue-700" to="/">
            {" "}
            Already got an account, nerd?{" "}
          </Link>
        </span>
      </div>
    </div>
  );
};

export default SignUp;
