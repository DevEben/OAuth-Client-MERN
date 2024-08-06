// Dashboard.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('authToken');
      
      try {
        const response = await axios.get('https://asianpacificexpress-api.onrender.com/auth/user', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUserData(response.data.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
        // Handle error or redirect to login if unauthorized
        if (error.response.status === 401) {
          localStorage.removeItem('authToken');
          window.location.href = '/'; // Redirect to login
        }
      }
    };

    fetchData();
  }, []);

  const handleLogout = () => {
    // Remove token and redirect to login
    localStorage.removeItem('authToken');
    window.location.href = '/';
  };

  return (
    <div className="dashboard-container">
      {userData ? (
        <div>
          <h1>Welcome, {userData.username}!</h1>
          <p>Email: {userData.email}</p>
          <img src={userData.photo} alt="User Profile" className="profile-image" />
          <button onClick={handleLogout} className="logout-button">Logout</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Dashboard;
