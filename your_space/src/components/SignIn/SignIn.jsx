import { useState } from 'react';
import { signIn } from '../../api/users.js'

function SignIn({ onSignIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  console.log(onSignIn)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await signIn(username, password);
    if (res.login) {
      onSignIn(res.user);
      console.log(onSignIn);
    } else {
      onSignIn(res.message);
      
    }
  };

  return (
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
  );
}

export default SignIn;
