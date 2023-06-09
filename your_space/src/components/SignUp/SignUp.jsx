import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signUp } from "../../api/users.js";

export default function SignUp({ onSignUp }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password || !email) {
      setError("Please enter your username, email, and password");
      return;
    }
    const res = await signUp(username, password, email);
    if (res.error) {
      setError(res.error);
      return;
    }
    onSignUp(res.user);
    navigate("/");
  };

  return (
    <>
      <h1 className="text-5xl font-bold text-center mb-5">Your Space</h1>
      <form onSubmit={handleFormSubmit} className="max-w-sm mx-auto border-2 p-10 border-teal-400">
        <div className="mb-4">
          <label htmlFor="username" className="block mb-2 font-semibold">
            Username:
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="Email " className="block mb-2 font-semibold">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2 font-semibold">
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        {error && <p>{error}</p>}
        <button
          type="submit"
          className="w-full py-2 px-4 text-white bg-teal-500 rounded-md hover:bg-teal-600"
        >
          Sign Up
        </button>
        <p className="text-purple-700">
          Already have an account, nerd? <Link to="/">Sign In</Link>
        </p>
      </form>
    </>
  );
}
