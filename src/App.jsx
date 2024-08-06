// App.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import AuthSuccess from './components/AuthSuccess';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/auth-success" element={<AuthSuccess />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
