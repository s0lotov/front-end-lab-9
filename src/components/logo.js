import React from 'react';
import './style/logo.css'

const Logo = ({ imagePath }) => {
  return (
    <div className="logo">
      <a href="/">
        <img src={imagePath}  />
      </a>
    </div>
  );
};

export default Logo;