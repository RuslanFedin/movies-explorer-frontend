import './Movies.css';

import React, { useEffect, useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { SEARCH_ERROR } from '../../utils/constants';
import { useLocalStorage } from '../../customHooks/useLocalStorage';
import { filterShortMovies } from '../../utils/filterShortMovies';


function Movies({
  movies,
  savedMovies,
  saveMovie,
  unsaveMovie }) {

  const [foundMovies, setFoundMovies] = useLocalStorage('foundMovies', []);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState ('');

  useEffect(() => {
    setFoundMovies(foundMovies);
  },[foundMovies, setFoundMovies]);

  function searchSubmit (request, isShort) {
    setIsLoading(true);
    setErrorMessage('');
    searchMovies(request, isShort);
    setIsLoading(false);
  }

  function searchMovies (request, isShort) {
    const movies = localStorage.getItem('movies');

    if (movies) {
      const data = JSON.parse(movies);
      setFoundMovies(filterFoundMovies(data, request, isShort));
      setIsLoading(false);
      return;
    }

  }

  function filterFoundMovies(data, request, isShort) {
    const filteredMovies = filterShortMovies(data, request, isShort);
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
                movies={movies}
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
