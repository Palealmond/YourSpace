import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn/SignIn.jsx";
import SignUp from "./components/SignUp/SignUp.jsx";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Posts from "./components/Posts/Posts";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<SignIn />} />
        <Route path="/signup" exact element={<SignUp />} />
        <Route path="/profile/:id" exact element={<Profile />} />
        <Route path="/posts" exact element={<Posts/>} />
      </Routes>
    </>
  );
}

export default App;
