import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn/SignIn.jsx';
import SignUp from './components/SignUp/SignUp.jsx';
import Profile from './components/Profile/Profile';

function App() {
  return (

    <>
      <Routes>
        <Route exact path="/" element={<SignIn />} />
        <Route path="/signup" exact element={<SignUp />} />
        <Route path="/profile/:id" exact element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
