import React from 'react';
import './assets/App.css';
import Login from './views/login';
import Verify from './views/verify';
import Signup from './views/signup';
import VerifyOTP from './views/verify-otp';
import Profile from './views/profile';
import { HashRouter as Router, Route } from "react-router-dom"

function App() {
  return (
    <Router>
    <Route path="/" exact component={Login} />
    <Route path="/verify" component={Verify}/>
    <Route path="/signup" component={Signup} />
    <Route path="/verify-otp" component={VerifyOTP} />
    <Route path="/profile" component={Profile} />
    </Router>
  );
}

export default App;
