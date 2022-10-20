import './SearchForm.css';

import React from "react";
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <section className='search-form'>
      <div className='movies__content'>
        <div className='search-form__container'>
          <form className='search-form__border'>
            <input className='search-form__input' placeholder='Фильм'></input>
            <button className='search-form__button' type='submit'>Поиск</button>
          </form>
        </div>
        <FilterCheckbox />
        <hr className='search-form__underline'/>
      </div>
    </section>
  );
}

export default SearchForm;
