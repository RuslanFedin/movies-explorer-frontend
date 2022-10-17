import './Logo.css';
import logo from '../../images/logo.svg'

import React from "react";

function Logo() {
  return (
    <img className='logo' src={logo} alt="логотип Movies explorer"/>
  );
}

export default Logo;
