import './Header.css'

import { MAIN_PAGE_PATH } from '../../utils/constants.js';

import React from "react";
import { Link } from 'react-router-dom';

import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import AuthBar from '../AuthBar/AuthBar';

function Header({ theme, isLoggedIn }) {

  if (theme === 'light')
  return (
    <header className='header'>
      <div className='header__content'>
        <Link className='header__logo' to={MAIN_PAGE_PATH}>
          <Logo />
        </Link>
        <Navigation theme={theme}/>
      </div>
    </header>
  );

  if (theme === 'dark' && isLoggedIn)
  return (
    <header className='header header_dark'>
    <div className='header__content'>
      <Link className='header__logo' to={MAIN_PAGE_PATH}>
        <Logo />
      </Link>
      <Navigation theme={theme} />
    </div>
  </header>
  );

  if (!isLoggedIn)
  return (
    <header className='header header_dark'>
    <div className='header__content'>
      <Link className='header__logo' to={MAIN_PAGE_PATH}>
        <Logo />
      </Link>
      <AuthBar />
    </div>
  </header>
  );
}

export default Header;
