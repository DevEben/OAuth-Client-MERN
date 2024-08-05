import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import GoogleLogin from './components/GoogleLogin';
import TwitterLogin from './components/TwitterLogin';

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/google-login">Login with Google</Link></li>
          <li><Link to="/twitter-login">Login with Twitter</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/google-login" element={<GoogleLogin />} />
        <Route path="/twitter-login" element={<TwitterLogin />} />
      </Routes>
    </Router>
  );
};

export default App;
