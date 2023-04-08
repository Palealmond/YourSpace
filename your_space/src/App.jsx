import React, { createContext , useEffect, useState} from "react";
import SignIn from "./components/SignIn/SignIn.jsx";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Posts from "./components/Posts/Posts";
import CreateProfile from "./components/Profile/CreateProfile";
import { Routes, Route, useNavigate } from "react-router-dom";

const AuthenticationContext = createContext()

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = () => {
    const local = localStorage.getItem('TOKEN')
    if (local) {
      setIsAuthenticated(true)
    }
    else {
      setIsAuthenticated(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('TOKEN');
    setIsAuthenticated(false);
    navigate('/signin');
  }

  useEffect(() => {
    handleSignIn()
  }, [])

  return (
    <AuthenticationContext.Provider value={isAuthenticated}>
      {isAuthenticated ? (
        <>
          <Header onLogout={handleLogout} />
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/create-profile" element={<CreateProfile />} />
            <Route path="/posts" element={<Posts />} />
          </Routes>
        </>
      ) : (
        <SignIn onSignIn={handleSignIn} />
      )}
    </AuthenticationContext.Provider>
  );
}

export default App;
