import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/auth/user`, { withCredentials: true })
      .then(response => {
        setUserData(response.data.data);
      })
      .catch(err => {
        console.error('Error fetching user data:', err);
      });
  }, []);

  return (
    <div className="home">
      <h1>Welcome to the Courier Management System</h1>
      {userData ? (
        <div>
          <h2>Hello, {userData.firstName} {userData.lastName}</h2>
          <img src={userData.profilePicture.url} alt="Profile" />
          <p>Email: {userData.email}</p>
          <p>Status: {userData.isVerified ? "Verified" : "Not Verified"}</p>
        </div>
      ) : (
        <p>Please log in using Google or Twitter.</p>
      )}
    </div>
  );
};

export default Home;
