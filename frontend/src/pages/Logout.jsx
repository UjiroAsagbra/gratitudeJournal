import React from 'react';
import { useUserSignup } from '../users/signup';
import {Navigate} from "react-router-dom"
import { useState } from 'react';

const LogoutButton = () => {
  const { logout } = useUserSignup();

  const handleLogout = () => {
    logout(); 
    window.location.href = '/'
 
  };

  return (
    <button onClick={handleLogout} className="button logout">
      Logout
    </button>
  );
};

export default LogoutButton;
