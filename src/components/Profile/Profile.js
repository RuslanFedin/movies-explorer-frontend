import './Profile.css';

import React, { useContext, useState, useRef } from 'react';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import FormValidity from '../../utils/FormValidity';

export default function Profile({ onSignOut, updateUseInfo, message}) {

  const  { value, setValue, error, isValid, handleError } = FormValidity();
  const inputRef = useRef();
  const currentUser = useContext(CurrentUserContext);

  const [isEdit, setIsEdit] = useState(false);

  function handleTooggleButton() {
    setIsEdit(!isEdit);
  }

  function onSubmit(e) {
    e.preventDefault();
    updateUseInfo(e, value.name || currentUser.user.name, value.email || currentUser.user.email);
    console.log(currentUser.user.name);
    setIsEdit(false);

  }

  return (
    <main className='profile'>
      <div className='profile__content'>
        <h1 className='profile__greeting'>Привет, {currentUser.user.name}</h1>
        <form
          className='profile__datas'
          onSubmit={onSubmit}
        >
          <div className='profile__stroke'>
            <label className='profile__text' htmlFor='name'>Имя</label>
            <input
              className={'profile__text profile__input'}
              id='name'
              name='name'
              defaultValue={currentUser.user.name}
              onChange={handleError}
              autoComplete='off'
              ref={inputRef}
              minLength='2'
              maxLength='30'
              disabled={!isEdit}
              type='text'
            ></input>
          </div>

          <hr className='profile__line'/>

          <div className='profile__stroke'>
            <label className='profile__text' htmlFor='email'>E-mail</label>
            <input
              className={'profile__text profile__input' + (isEdit ? ' profile__input_active' : '')}
              id='email'
              name='email'
              defaultValue={currentUser.user.email}
              onChange={handleError}
              autoComplete='off'
              ref={inputRef}
              disabled={!isEdit}
              type='email'
            ></input>
          </div>

        </form>

        {!isEdit

          ? <button
              className={'profile__button'}
              type='button'
              onClick={handleTooggleButton}
            >Редактировать</button>

          : <button
              className={'profile__button profile__button_save' + (!isValid ? ' profile__button profile__button_save_disabled' : '')}
              type='submit'
              onClick={onSubmit}
              disabled={!isValid}
            >Сохранить</button>
        }
        {!isEdit

          ? <button
              className='profile__button profile__button_accent'
              type='button'
              onClick={() => onSignOut()}
            >Выйти из аккаунта</button>
        : ''
        }

      </div>
    </main>
  )
}
