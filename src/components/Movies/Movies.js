import './Movies.css';

import React, { useEffect, useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { SEARCH_ERROR } from '../../utils/constants';
import { useLocalStorage } from '../../customHooks/useLocalStorage';
import { filterShortMovies } from '../../utils/filterShortMovies';

function Movies({
  savedMovies,
  saveMovie,
  unsaveMovie,
  isLoading,
  setIsLoading,
  getAllMovies
  }) {

  const [foundMovies, setFoundMovies] = useLocalStorage('foundMovies', []);
  const [errorMessage, setErrorMessage] = useState ('');

  useEffect(() => {
    setFoundMovies(foundMovies);
  },[foundMovies, setFoundMovies]);

  function searchSubmit (request, isShort) {
    setIsLoading(true)
    setErrorMessage('');
    searchMovies(request, isShort);
    setTimeout(() => setIsLoading(false), 200);
  }

  function searchMovies (request, isShort) {
    const movies = localStorage.getItem('movies');

    if (movies) {
      const allMovies = JSON.parse(movies);
      setFoundMovies(filterFoundMovies(allMovies, request, isShort));
      return;
    }
  }

  function filterFoundMovies(allMovies, request, isShort) {
    const filteredMovies = filterShortMovies(allMovies, request, isShort);
    setLocalStorage(filteredMovies, request, isShort);
    return filteredMovies;
  }

  function setLocalStorage(data, request, isShort) {
    localStorage.setItem('foundMovies', JSON.stringify(data));
    localStorage.setItem('request', request);
    localStorage.setItem('isShort', isShort);
  }

  return (
    <main className='movies'>
      <SearchForm
        searchSubmit={searchSubmit}
      />

      {localStorage.getItem('request') &&
        (errorMessage
          ? (<p className='movies__error-message'>{errorMessage}</p>)
          : isLoading

          ? (<Preloader/>)
          : foundMovies.length === 0

          ? (<p className='movies__error-message'>{SEARCH_ERROR.REQUEST_ERROR}</p>)
          : (
              <MoviesCardList
                foundMovies={foundMovies}
                movies={foundMovies}
                savedMovies={savedMovies}
                saveMovie={saveMovie}
                unsaveMovie={unsaveMovie}
              />
            )
        )
      }
    </main>
  );
}

export default Movies;
