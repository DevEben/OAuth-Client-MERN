// src/User.js
import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

const User = () => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!user) {
        return <p>User not authenticated</p>;
    }

    return (
        <div>
            <h1>Welcome, {user.displayName}</h1>
            <p>Email: {user.emails[0].value}</p>
            {/* Display other user information if needed */}
        </div>
    );
};

export default User;
