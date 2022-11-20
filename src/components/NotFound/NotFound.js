import './NotFound.css'

import React from 'react'
import { useHistory } from 'react-router-dom'

export default function NotFound() {

  let history = useHistory();

  return (
    <main className='not-found'>

        <h1 className='not-found__title'>404</h1>
        <p className='not-found__text'>Страница не найдена</p>
        <button
          className='not-found__back-button'
          onClick={() => history.goBack()}
        >Назад</button>

    </main>
  )
}
