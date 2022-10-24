import './NotFound.css'
import { MAIN_PAGE_PATH } from '../../utils/constants';

import React from 'react'
import { Link } from 'react-router-dom'



export default function NotFound() {

  return (
    <main className='not-found'>

        <h1 className='not-found__title'>404</h1>
        <p className='not-found__text'>Страница не найдена</p>
        <Link
          to={ MAIN_PAGE_PATH }
          className='not-found__back-link'
        >Назад</Link>

    </main>
  )
}
