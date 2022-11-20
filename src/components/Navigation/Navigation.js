import './Navigation.css';
import userIcon from '../../images/userIcon.svg';

import {
    PATHS
  } from '../../utils/constants';

import React, { useState } from "react";
import { NavLink, useLocation } from 'react-router-dom';

function Navigation({ }) {
  const [nav, setNav] = useState(true);
  const location = useLocation();

  return (
    <nav className={nav
      ? 'navigation'
      : 'navigation navigation_active'}>

      <button
        onClick={() => setNav(!nav)}
        className='navigation__button'>

            <span className={nav
            ? 'navigation__iconMenu'
              + (location.pathname === PATHS.MAIN_PAGE
              ? ' navigation__iconMenu_white' : '')
            : 'navigation__iconMenu navigation__iconMenu_active'}></span>

      </button>
      <div className={nav
        ? 'navigation__container '
        : 'navigation__container navigation__container_active'}>

        <ul className='navigation__list'>
          <li className='navigation__item navigation__item_to-main'>
            <NavLink
              className={'navigation__link'
              + (location.pathname === PATHS.MAIN_PAGE
                ? ' navigation__link_light' : '')}
              activeClassName='navigation__link_active'
              to={PATHS.MAIN_PAGE}
              exact
              onClick={() => setNav(!nav)}
            >
              Главная
            </NavLink>
          </li>

          <li className='navigation__item'>
            <NavLink
              className={'navigation__link'
              + (location.pathname === PATHS.MAIN_PAGE
                ? ' navigation__link_light' : '')}
              activeClassName='navigation__link_active'
              to={PATHS.MOVIES}
              onClick={() => setNav(!nav)}
            >
              Фильмы
            </NavLink>
          </li>

          <li className='navigation__item'>
            <NavLink
              className={'navigation__link'
              + (location.pathname === PATHS.MAIN_PAGE
                ? ' navigation__link_light' : '')}
              activeClassName='navigation__link_active'
              to={PATHS.SAVED_MOVIES}
              onClick={() => setNav(!nav)}
            >
              Сохранённые фильмы
            </NavLink>
          </li>
        </ul>

        <NavLink
          className={'navigation__link navigation__link_account'
          + (location.pathname === PATHS.MAIN_PAGE
            ? ' navigation__link_light' : '')}
          activeClassName='navigation__link_account_active'
          to={PATHS.USER_PAGE}
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
