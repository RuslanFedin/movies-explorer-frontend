import './SavedMovies.css';

import React, { useEffect, useState } from "react";
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { filterShortMovies } from '../../utils/filterShortMovies';
import { saveMovie } from '../../utils/MainApi';
import { SEARCH_ERROR } from '../../utils/constants';

function SavedMovies({
  savedMovies,
  unsaveMovie,
}) {

  const [foundMovies, setFoundMovies] = useState(savedMovies || []);

  useEffect(() => {
    setFoundMovies(savedMovies);
  }, [savedMovies]);

  function searchSubmit(request, isShort) {
    setFoundMovies(filterShortMovies(savedMovies, request, isShort));
  }

  return (
    <main className='movies'>
      <SearchForm
        searchSubmit={searchSubmit}
      />
      {
        foundMovies.length === 0 ?
        (<p className='movies__error-message'>{SEARCH_ERROR.REQUEST_ERROR}</p>) :
        (
          <MoviesCardList
            foundMovies={foundMovies}
            movies={foundMovies}
            saveMovie={saveMovie}
            savedMovies={savedMovies}
            unsaveMovie={unsaveMovie}
          />
        )
      }

    </main>
  )
}

export default SavedMovies;
