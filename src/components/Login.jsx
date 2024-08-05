// src/Login.js
import React from 'react';

const Login = () => {
    const handleLogin = () => {
        window.location.href = `${import.meta.env.VITE_BACKEND_URL}/auth/google`;
    };

    return (
        <div>
            <h1>Login</h1>
            <button onClick={handleLogin}>Login with Google</button>
        </div>
    );
};

export default Login;
