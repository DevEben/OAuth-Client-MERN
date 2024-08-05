import React, { useEffect } from 'react';

const TwitterLogin = () => {
  useEffect(() => {
    // Redirect to Twitter authentication endpoint
    window.location.href = `${import.meta.env.VITE_BACKEND_URL}/auth/twitter`;
  }, []);

  return (
    <div className="twitter-login">
      <h2>Redirecting to Twitter...</h2>
    </div>
  );
};

export default TwitterLogin;