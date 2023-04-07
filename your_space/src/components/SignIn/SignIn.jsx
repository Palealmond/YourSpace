import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
// import api from '../../api/apiConfig';
import { signin } from '../../api/users';

const SignIn = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  // useEffect(() => {
  //   if (auth.user) {
  //     navigate(`/profile/${response.data.userId}`);
  //   }
  // }, [auth])

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };




  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await signin(formData);
      console.log(response);
      if (response.data) {
        // Get user profile data, then go to pages
        if (response.data.hasProfile) {
          console.log("Going to your profile");
          navigate(`/profile/${response.data.userId}`); // include userId in URL
        } else {
          console.log("Need to make create-profile?");
          navigate("/create-profile/");
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full h-full flex justify-center mt-12">
      <div className="w-7/8 max-w-md h-1/3 border-2 border-blue-700 flex flex-col justify-center items-center gap-4 p-2">
        <h2 className="font-extrabold text-blue-700">Sign In</h2>
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
          <Link className="text-blue-700" to="/SignUp">
            Get an account nerd
          </Link>
        </span>
      </div>
    </div>
  );
};

export default SignIn;
