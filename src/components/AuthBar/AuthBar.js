import './AuthBar.css';
import { PATHS } from '../../utils/constants'

import React from "react";
import { Link } from 'react-router-dom';

function AuthBar() {
  return (
    <nav className='auth-bar'>
      <ul className='auth-bar__list'>
        <li className='auth-bar__item'>
          <Link to={PATHS.REGISTRATION} className='auth-bar__link'>Регистрация</Link>
        </li>
        <li className='auth-bar__item'>
          <Link to={PATHS.AUTHORIZATION} className='auth-bar__link auth-bar__link_major'>Войти</Link>
        </li>
      </ul>
    </nav>
  );
}

export default AuthBar;
