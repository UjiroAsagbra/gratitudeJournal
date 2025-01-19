import React from 'react';
import { useUserSignup } from '../users/signup';
import {Navigate} from "react-router-dom"
import { useState } from 'react';

const LogoutButton = () => {
  const { logout } = useUserSignup();

  const handleLogout = () => {
    logout(); // Call the logout function
    window.location.href = '/'
 
  };

  return (
    <button onClick={handleLogout} className="logout-button">
      Logout
    </button>
  );
};

export default LogoutButton;
