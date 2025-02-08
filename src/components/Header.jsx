// src/components/Header.jsx
import React from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');  // Remove token on logout
    navigate('/login');  // Redirect to login page
  };

  return (
    <div style={{ padding: '10px', background: '#f0f0f0', display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#1890ff' }}>Hotel Management System</div>
      <Button onClick={handleLogout} type="primary" danger>Logout</Button>
    </div>
  );
};

export default Header;
