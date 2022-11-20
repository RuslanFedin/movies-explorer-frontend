import './SearchForm.css';

import React, { useEffect, useState } from "react";
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

import { PATHS,SEARCH_OPTIONS } from '../../utils/constants';
import { useLocation } from 'react-router-dom';

function SearchForm({ searchSubmit }) {

  const location = useLocation();

  const [request, setRequest] = useState('');
  const [isShort, setIsShort] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setRequest(localStorage.getItem('request') || '');
    setIsShort(localStorage.getItem('isShort') || false);
  }, []);

  useEffect(() => {
    if (location.pathname === PATHS.SAVED_MOVIES) {
      setRequest('');
      setIsShort(false);
    }
  }, [location]);

  function handleRequestChange(e) {
    setRequest(e.target.value);
    if (!e.target.value) {
      setErrorMessage(SEARCH_OPTIONS.SEARCH_ERROR);
    } else {
      setErrorMessage('');
    }
  }

  function handleShortChange(checked) {
    setIsShort(checked);
    searchSubmit(request, checked);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!request) {
      setErrorMessage(SEARCH_OPTIONS.SEARCH_ERROR);
      return;
    }
    searchSubmit(request, isShort);
    setErrorMessage('');
  }

  return (
    <section className='search-form'>
      <div className='movies__content'>
        <div className='search-form__container'>
          <form
            className='search-form__border'
            onSubmit={handleSubmit}
            noValidate
          >
            <input
              className='search-form__input'
              placeholder='Фильм'
              type='text'
              name='search'
              value={request}
              onChange={handleRequestChange}
              required
            ></input>

            <button
              className='search-form__button'
              type='submit'
            >Поиск</button>
            <span className='search-form__error-message'>{errorMessage}</span>

          </form>
        </div>

        <FilterCheckbox
          onChange={handleShortChange}
          isShort={isShort}
        />
        <hr className='search-form__underline'/>
      </div>
    </section>
  );
}

export default SearchForm;
