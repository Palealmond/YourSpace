import './App.css';
import React from 'react';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/signin" exact component={SignIn} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/profile/:id" exact component={Profile} />
      </Router>
    </BrowserRouter>
  );
}

export default App;
