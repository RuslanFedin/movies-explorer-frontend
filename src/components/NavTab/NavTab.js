import './NavTab.css'

import React from "react";
import { Link, animateScroll } from 'react-scroll';

function NavTab() {
  return (
    <section className='nav-tab'>
      <ul className='nav-tab__list'>
        <li className='nav-tab__item'>
          <Link to='about-project' smooth={true} className='nav-tab__link'>О проекте</Link>
        </li>
        <li className='nav-tab__item'>
          <Link to='techs' smooth={true} className='nav-tab__link'>Технологии</Link>
        </li>
        <li className='nav-tab__item'>
          <Link to='about-me' smooth={true} className='nav-tab__link'>Студент</Link>
        </li>
      </ul>
    </section>
  );
}

export default NavTab;
