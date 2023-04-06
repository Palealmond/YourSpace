import { useState, useEffect } from "react";
import axios from 'axios';
import { signup } from "../../api/users";

function SignUp() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await signup(username, password);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    return (
    <div>
        SignUp
        <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button>SignUp</button>
      </form>
    </div>    
  )
}

export default SignUp