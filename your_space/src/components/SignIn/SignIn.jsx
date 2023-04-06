import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const SignIn = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/login/', formData);
      if (response.data.isAuthenticated) {
        if (response.data.hasProfile) {
          navigate('/profile');
        } else {
          navigate('/create-profile');
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleFormSubmit}>
        <label>
          Username:
          <input type="text" name="username" value={formData.username} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <span>
        <Link to="/SignUp"> Get an account nerd </Link>
      </span>
    </div>
  );
};

export default SignIn;
