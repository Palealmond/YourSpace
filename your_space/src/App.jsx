
import React, { createContext , useEffect, useState} from "react";
import SignIn from "./components/SignIn/SignIn.jsx";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Posts from "./components/Posts/Posts";
import CreateProfile from "./components/Profile/CreateProfile";
import { Routes, Route } from "react-router-dom";





const AuthenticationContext = createContext()

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const local = localStorage.getItem('TOKEN')
  const handleSignIn = () => {
    if (local) {
      setIsAuthenticated(true)
    }
  }

useEffect(() => {
    handleSignIn()
  })
  return (
    <AuthenticationContext.Provider value={isAuthenticated}>{isAuthenticated ? (
      <>
        <Header />
        <Routes>
          <Route exact path="/" element={<Profile />} />
          <Route path="/create-profile" exact element={<CreateProfile />} />
          <Route path="/posts" exact element={<Posts />} />
        </Routes>
      </>
    ) : (
      <SignIn onSignIn={handleSignIn} />
    )}
    
    </AuthenticationContext.Provider>

  );
}

export default App;