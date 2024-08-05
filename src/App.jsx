// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './components/AuthContext';
import Login from './components/Login';
import User from './components/User';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/user" element={<User />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;
