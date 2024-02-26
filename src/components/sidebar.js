import React from 'react';
import './style/sidebar.css';
import Menu from './menu';
import Logo from './logo';

const SideBar = ({ title, menuList, logoPath }) => {
  return (
    <div className="sidenav">
      <Logo imagePath={logoPath}/>
      <h2>{title}</h2>
      <Menu list={menuList}/>
    </div>
  );
};

export default SideBar;
