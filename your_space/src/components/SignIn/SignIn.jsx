import { useState } from 'react';
import { getProfile } from '../../api/users.js'
import { signIn } from '../../api/users.js';
import { Link, useNavigate } from 'react-router-dom';

export default function SignIn({ onSignIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Please enter your username and password');
      return;
    }
    const res = await signIn(username, password);
    if (res.error) {
      setError(res.error);
      return;
    }
    onSignIn(res.user);

    // Check if user has a profile
    const profileRes = await getProfile(localStorage.getItem('USER_ID'));
    if (profileRes.error) {
      // User doesn't have a profile, navigate to create profile page
      navigate('/create-profile');
    }
    else {
      // User has a profile, navigate to profile page
      navigate('/');
    }
  };

  return (
    <>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
        <div className="mb-4">
          <label htmlFor="username" className="block mb-2 font-semibold">Username:</label>
          <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md" />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2 font-semibold">Password:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md" />
        </div>
        <button type="submit" className="w-full py-2 px-4 text-white bg-blue-500 rounded-md hover:bg-blue-600">Sign In</button>
      </form>
      <span>
        <Link className="text-blue-700" to="/SignUp">
          {" "}
          Need an account?{" "}
        </Link>
      </span>
    </>
  )
}