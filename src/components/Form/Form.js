import './Form.css'
import {
  AUTH_PAGE_PATH,
  REG_PAGE_PATH,
  MAIN_PAGE_PATH
} from '../../utils/constants';

import React from 'react'
import Logo from '../Logo/Logo'

import { Link } from 'react-router-dom';

export default function Form({ type }) {
  if (type === 'signup')
  return (
    <form className='form'>
        <Link className='header__logo' to={MAIN_PAGE_PATH}>
          <Logo />
        </Link>

      <h1 className='form__greeting'>Добро пожаловать!</h1>
      <div>
      <div className="form__input-container">
        <label className="form__label">Имя</label>
        <input
          className="form__input"
          id="name"
          name="name"
          type="name"
          required
        />
      </div>
      <div className='form__input-container'>
        <label className='form__label'>E-mail</label>
        <input
          className='form__input'
          id="email"
          name="email"
          type="email"
          required
        />
      </div>
      <div className='form__input-container'>
        <label className='form__label'>Пароль</label>
        <input
          className='form__input'
          id="password"
          name="password"
          type="password"
          required
        />
      </div>
      <span className='form__label form__label_message'>{`Что-то пошло не так...`}</span>
      </div>
      <div>
      <button className='form__button' type='submit'>Зарегестрироваться</button>
      <p className='form__text'>Уже зарегестрированы? <Link className='form__link' to={AUTH_PAGE_PATH}>Войти</Link></p>
      </div>
    </form>
  );
  if (type === 'signin')
  return (
    <form className='form'>
        <Link className='header__logo' to={MAIN_PAGE_PATH}>
          <Logo />
        </Link>

      <h1 className='form__greeting'>Рады видеть!</h1>
      <div className='form__input-container'>
        <label className='form__label'>E-mail</label>
        <input
          className='form__input'
          id="email"
          name="email"
          type="email"
          required
        />
      </div>
      <div className='form__input-container'>
        <label className='form__label'>Пароль</label>
        <input
          className='form__input'
          id="password"
          name="password"
          type="password"
          required
        />
        <span className='form__label form__label_message'>{ }</span>
      </div>
      <div className='form__submit'>
      <button className='form__button' type='submit'>Войти</button>
      <p className='form__text'>Еще не зарегестрированы? <Link to={REG_PAGE_PATH}>Регистрация</Link></p>
      </div>
    </form>
  );
}

