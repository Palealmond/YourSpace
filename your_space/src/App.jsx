import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn/SignIn.jsx";
import SignUp from "./components/SignUp/SignUp.jsx";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="bg-gray-200 h-screen">
      <div className="w-[1080px] max-w-full mx-auto bg-white">
        <Header />
        <Routes>
          <Route exact path="/" element={<SignIn />} />
          <Route path="/signup" exact element={<SignUp />} />
          <Route path="/profile/:id" exact element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
