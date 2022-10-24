import './AuthBar.css';
import { REG_PAGE_PATH, AUTH_PAGE_PATH } from '../../utils/constants'

import React from "react";
import { Link } from 'react-router-dom';

function AuthBar() {
  return (
    <nav className='auth-bar'>
      <ul className='auth-bar__list'>
        <li className='auth-bar__item'>
          <Link to={REG_PAGE_PATH} className='auth-bar__link'>Регистрация</Link>
        </li>
        <li className='auth-bar__item'>
          <Link to={AUTH_PAGE_PATH} className='auth-bar__link auth-bar__link_major'>Войти</Link>
        </li>
      </ul>
    </nav>
  );
}

export default AuthBar;
