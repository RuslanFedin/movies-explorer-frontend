import './Profile.css'

import React from 'react'

export default function Profile() {
  return (
    <section className='profile'>
      <div className='profile__content'>
        <h1 className='profile__greeting'>Привет, Виталий!</h1>
        <div className='profile__datas'>
          <div className='profile__stroke'>
            <p className='profile__text'>Имя</p>
            <p className='profile__text'>Виталий</p>
          </div>

          <hr className='profile__line'/>

          <div className='profile__stroke'>
            <p className='profile__text'>E-mail</p>
            <p className='profile__text'>pochta@yandex.ru</p>
          </div>

        </div>

        <button className='profile__button'>Редактировать</button>
        <button className='profile__button profile__button_accent'>Выйти из аккаунта</button>
      </div>
    </section>
  )
}
