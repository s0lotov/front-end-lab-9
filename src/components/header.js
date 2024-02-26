import React from 'react';
import DateTime from './DateTime';
import './style/header.css';

const Header = ({ title }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <div className="datetime">
        <DateTime />
      </div>
      <nav className='nav-bar'>
        <a href='#'>Main</a>
        <a href='#'>Blog</a>
        <a href='#'>Contacts</a>
      </nav>
    </header>
  );
};

export default Header;
