import React from 'react';
import { useUserSignup } from '../users/signup';
import {Navigate} from "react-router-dom"
import { useState } from 'react';

const LogoutButton = () => {
  const { logout } = useUserSignup();

  const handleLogout = () => {
<<<<<<< HEAD
    logout(); 
=======
    logout(); // Call the logout function
>>>>>>> e6dfb13 (Initial Commit)
    window.location.href = '/'
 
  };

  return (
<<<<<<< HEAD
    <button onClick={handleLogout} className="button logout">
=======
    <button onClick={handleLogout} className="logout-button">
>>>>>>> e6dfb13 (Initial Commit)
      Logout
    </button>
  );
};

export default LogoutButton;
