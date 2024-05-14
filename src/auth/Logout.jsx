import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = ({ onLogout }) => {
  const navigate = useNavigate();

  useEffect(() => {
  
    localStorage.removeItem('token');

    onLogout();

    navigate('/login');
  }, [onLogout, navigate]);

  return null; 
};

export default Logout;
