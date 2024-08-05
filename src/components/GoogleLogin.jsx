import React, { useEffect } from 'react';

const GoogleLogin = () => {
  useEffect(() => {
    // Redirect to Google authentication endpoint
    window.location.href = `${import.meta.env.VITE_BACKEND_URL}/auth/google`;
  }, []);

  return (
    <div className="google-login">
      <h2>Redirecting to Google...</h2>
    </div>
  );
};

export default GoogleLogin;
