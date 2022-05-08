import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <div style={{ display: 'flex' }}>
      <p onClick={() => navigate('/')}>home</p>
      <p onClick={() => navigate('/login')}>login</p>
    </div>
  );
};

export default Header;
