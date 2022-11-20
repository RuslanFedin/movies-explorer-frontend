import './Footer.css';

import React from "react";
import { GITHUB_PAGE } from '../../utils/constants';
import { YA_PRACTICUM_PAGE } from '../../utils/constants';

function Footer() {

  return (
    <footer className='footer'>
      <div className='footer__content'>
        <h5 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h5>
        <hr className='footer__line' />
        <div className='footer__column-title'>
          <p className='footer__text footer__text_copyright'>&#169;2022</p>
          <ul className='footer__links'>
            <li>
              <a className='footer__text footer_text-link' href={YA_PRACTICUM_PAGE} target="_blank" rel="noreferrer">Яндекс.Практикум</a>
            </li>
            <li>
              <a className='footer__text footer_text-link' href={GITHUB_PAGE} target="_blank" rel="noreferrer">Github</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
