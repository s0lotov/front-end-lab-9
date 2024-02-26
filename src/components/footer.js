import React from 'react';
import './style/footer.css';
import Menu from './menu';

const Footer = ({ title, menuList  }) => {
  return (
    <footer className="footer">
      <h1>{title}</h1>
      <Menu list={menuList} />
    </footer>
  );
};

export default Footer;
