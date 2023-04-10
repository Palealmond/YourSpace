import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signUp } from '../../api/users.js';

export default function SignUp({ onSignUp}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password || !email) {
      setError('Please enter your username, email, and password');
      return;
    }
    const res = await signUp(username, password, email);
    if (res.error) {
      setError(res.error);
      return;
    }
    onSignUp(res.user);
    navigate('/');
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="Email ">Email:</label>
        <input
          type="email"
          id="email"
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <p>{error}</p>}
      <button type="submit">Sign Up</button>
      <p>
        Already have an account? <Link to="/signin">Sign In</Link>
      </p>
    </form>
  );
}
