import './Header.css'

import { PATHS } from '../../utils/constants.js';

import React from "react";
import { Link, useLocation } from 'react-router-dom';

import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import AuthBar from '../AuthBar/AuthBar';

function Header({ loggedIn, navShown, closeNav, onClick }) {

  const location = useLocation();

  return(
    <header
      className={'header'
      + (location.pathname === PATHS.MAIN_PAGE
        ? ' header_dark' : '')
      }
    >
      <div className='header__content'>
        <Link className='header__logo' to={PATHS.MAIN_PAGE}>
        <Logo />
        </Link>
        { loggedIn
          ? <Navigation/>
          : <AuthBar /> }
      </div>
    </header>
  );
}

export default Header;
