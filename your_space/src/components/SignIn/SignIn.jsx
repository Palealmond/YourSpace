import { useState, useEffect } from "react";
import axios from 'axios';
import { signin } from "../../api/users";

function SignIn() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const response = await signin(username, password);
    //         console.log(response);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            const response = await axios.post("https://yourspace.herokuapp.com/api/token/", username, password)
        console.log(response)
        }
        catch(err)
        {
            console.log(err)
        }
    }


    return (
    <div className="border-2">
        SignIn
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
        <button>SignIn</button>
      </form>
    </div>    
  )
}

export default SignIn