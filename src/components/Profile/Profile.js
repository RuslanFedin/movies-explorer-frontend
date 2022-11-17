import './Profile.css';

import React, { useContext, useState, useEffect } from 'react';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import FormValidity from '../../utils/FormValidity';
import { useLocation } from 'react-router-dom';
import { PATHS } from '../../utils/constants'

export default function Profile({ onSignOut, updateUserInfo }) {
  const currentUser = useContext(CurrentUserContext);
  const location = useLocation();
  const  { error, isValid, setIsValid, handleValidity } = FormValidity();

  const [isInputDisabled, setIsInputDisabled] = useState(true);
  const [isInputValid, setIsInputValid] = useState(true);
  const [value, setValue] = useState({});

  useEffect(() => {
    if (location.pathname === PATHS.USER_PAGE) {
      setValue(currentUser);
    }
  }, [location]);

  function handleInput() {
    setIsInputDisabled(false);
    setIsValid(false);
  }

  function handleInputValue(e) {
    setValue({ ...value, [e.target.name]: e.target.value });
    console.log(e.target.checkValidity());
    if (e.target.checkValidity()) {
      console.log(true)
      // setIsInputValid(true);
    }
    else {
      setIsInputValid(false);
      // console.log(false);
    }
  }

  useEffect(() => {
    if (value.name === currentUser.name && value.email === currentUser.email) {
      setIsValid(false);
    }
  }, [value]);

  function handleSubmit(e) {
    console.log(49);
    e.preventDefault();
    setIsInputDisabled(true);
    updateUserInfo({ name: value.name, email: value.email });
  }

  // function handleCancel() {
  //   setValue(currentUser);
  //   setError({});
  //   setIsInputValid(true);
  //   setIsInputDisabled(true);
  // }

  function handleFocus(e) {
    e.target.select();
  }



  return (
    <main className='profile'>
      <div className='profile__content'>
        <h1 className='profile__greeting'>Привет, {currentUser.name}</h1>
        <form
          className='profile__datas'
          onChange={handleValidity}
          onSubmit={handleSubmit}
        >
          <div className='profile__stroke'>
            <label className='profile__text' htmlFor='name'>Имя</label>
            <input
              className={`profile__text profile__input`}
              id='name'
              name='name'
              defaultValue={currentUser.name}
              onChange={handleInputValue}
              autoComplete='off'
              onFocus={handleFocus}
              minLength='2'
              maxLength='30'
              disabled={isInputDisabled}
              type='text'
              // pattern=
              value={value.name}
            ></input>
          </div>

          <hr className='profile__line'/>

          <div className='profile__stroke'>
            <label className='profile__text' htmlFor='email'>E-mail</label>
            <input
              className={`profile__text profile__input`}
              id='email'
              name='email'
              defaultValue={currentUser.email}
              onChange={handleInputValue}
              autoComplete='off'
              disabled={isInputDisabled}
              type='email'
              value={value.email}
            ></input>
          </div>

        </form>
        <span className='profile__input_error'>{(error.username || '') + ' ' + (error.email || '')}</span>

        <button
          className={`profile__button ${isInputDisabled ? '' : 'profile__button_hidden'}`}
          type='button'
          onClick={ handleInput }
        >Редактировать</button>

        <button
          className={`profile__button profile__button_save ${isInputDisabled ? 'profile__button_hidden' : ''}`}
          type='submit'
          form='profile__content'
          disabled={!isValid}
        >Сохранить</button>

        <button
          className={`profile__button profile__button_accent ${isInputDisabled ? '' : 'profile__button_hidden'}`}
          type='button'
          onClick={() => onSignOut(currentUser.email)}
        >Выйти из аккаунта</button>

      </div>
    </main>
  )
}
