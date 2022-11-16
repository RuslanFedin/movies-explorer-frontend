import './SavedMovies.css';

import React, { useEffect, useState } from "react";
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { SEARCH_ERROR } from '../../utils/constants';
import { filterShortMovies } from '../../utils/filterShortMovies';
import { useLocalStorage } from '../../customHooks/useLocalStorage';
import { saveMovie } from '../../utils/MainApi';

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
      <MoviesCardList
            foundMovies={foundMovies}
            movies={foundMovies}
            saveMovie={saveMovie}
            savedMovies={savedMovies}
            unsaveMovie={unsaveMovie}
            />
    </main>
  )
}

export default SavedMovies;
