import './Navigation.css';
import userIcon from '../../images/userIcon.svg';

import {
    MAIN_PAGE_PATH,
    MOVIES_PAGE_PATH,
    SAVED_MOVIES_PAGE_PATH,
    USER_PAGE_PATH,
  } from '../../utils/constants';

import React, { useState } from "react";
import { NavLink } from 'react-router-dom';

function Navigation({ theme, isOpenMenu, onCloseMenu }) {
  const [nav, setNav] = useState(true);

  return (
    <nav className={nav
      ? 'navigation'
      : 'navigation navigation_active'}>

      <button
        onClick={() => setNav(!nav)}
        className='navigation__button'>
          <span className={nav
            ? 'navigation__iconMenu'
            : 'navigation__iconMenu navigation__iconMenu_active'}></span>

      </button>
      <div className={nav
        ? 'navigation__container '
        : 'navigation__container navigation__container_active'}>

        <ul className='navigation__list'>
          <li className='navigation__item navigation__item_to-main'>
            <NavLink
              className='navigation__link'
              activeClassName='navigation__link_active'
              to={MAIN_PAGE_PATH}
              exact
              onClick={() => setNav(!nav)}
            >
              Главная
            </NavLink>
          </li>

          <li className='navigation__item'>
            <NavLink
              className='navigation__link'
              activeClassName='navigation__link_active'
              to={MOVIES_PAGE_PATH}
              onClick={() => setNav(!nav)}
            >
              Фильмы
            </NavLink>
          </li>

          <li className='navigation__item'>
            <NavLink
              className='navigation__link'
              activeClassName='navigation__link_active'
              to={SAVED_MOVIES_PAGE_PATH}
              onClick={() => setNav(!nav)}
            >
              Сохранённые фильмы
            </NavLink>
          </li>
        </ul>

        <NavLink
          className='navigation__link navigation__link_account'
          activeClassName='navigation__link_account_active'
          to={USER_PAGE_PATH}
          onClick={() => setNav(!nav)}
        >
          <p className='navigation__text'>Аккаунт</p>
          <img className='navigation__icon' src={userIcon} alt="иконка аккаунта"/>
        </NavLink>
      </div>
    </nav>
  );
}

export default Navigation;
