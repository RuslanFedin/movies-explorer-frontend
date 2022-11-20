import './Form.css'
import {
  PATHS
} from '../../utils/constants';

import React, { useState } from 'react'
import Logo from '../Logo/Logo'

import { Link, useLocation } from 'react-router-dom';

const Form = ({ onRegister, onLogin, errorMessage, setErrorMessage, successMessage }) => {

  const location = useLocation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  function handleRegister(e) {
    e.preventDefault();
    onRegister({email, password, name});
  }

  function handleLogin(e) {
    e.preventDefault();
    onLogin({email, password});
  }

  function handleSetEmail(e) {
    setEmail(e.target.value);
  }

  function handleSetPassword(e) {
    setPassword(e.target.value);
  }

  function handleSetName(e) {
    setName(e.target.value);
  }

  return (

    <form className='form' onSubmit={(location.pathname === PATHS.REGISTRATION)
    ? (handleRegister)
    : (handleLogin)}>

      <Link className='header__logo' to={PATHS.MAIN_PAGE}>
        <Logo />
      </Link>

      {(location.pathname === PATHS.REGISTRATION)
      ? (<h1 className='form__greeting'>Добро пожаловать!</h1>)
      : (<h1 className='form__greeting'>Рады видеть!</h1>)}

      <div>
        {(location.pathname === PATHS.REGISTRATION)
        ? (<div className="form__input-container">
            <label className="form__label">Имя</label>
            <input
              className="form__input"
              id="name"
              name="name"
              type="name"
              value={name}
              onChange={handleSetName}
              required
            />
          </div>)
        : '' }

        <div className='form__input-container'>
          <label className='form__label'>E-mail</label>
          <input
            className='form__input'
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={handleSetEmail}
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
            value={password}
            onChange={handleSetPassword}
            required
          />
        </div>
        <span className='form__label form__label_message'>{errorMessage}</span>
      </div>

      {(location.pathname === PATHS.REGISTRATION)
        ? (<div>
            <button className='form__button' type='submit'>Зарегестрироваться</button>
            <p className='form__text'>Уже зарегестрированы? <Link className='form__link' to={PATHS.AUTHORIZATION} >Войти</Link></p>
          </div>)
        : (<div className='form__submit'>
            <button className='form__button' type='submit'>Войти</button>
            <p className='form__text'>Еще не зарегестрированы? <Link className='form__link' to={PATHS.REGISTRATION}>Регистрация</Link></p>
          </div>)
      }
    </form>
  );
}

export default Form;

