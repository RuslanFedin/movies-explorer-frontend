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

  const [isLoading, setIsLoading] = useState(false);
  const [foundMovies, setFoundMovies] = useState(savedMovies || []);
  console.log(savedMovies);


  useEffect(() => {
    setFoundMovies(savedMovies);
  }, [savedMovies]);

  function handleSearchSubmit(request, isShort) {
    setIsLoading(true);
    setFoundMovies(filterShortMovies(savedMovies, request, isShort));
    setIsLoading(false);
  }

  function resetSearch() {
    return {
      request: '',
      isShort: '',
    };
  }

  return (
    <main className='movies'>
      <SearchForm
        handleSearch={handleSearchSubmit}
        resetSearch={resetSearch}
      />
      {
        isLoading ? (
        <Preloader />
        ) : foundMovies.length === 0 ? (
          <span>{SEARCH_ERROR.NOT_FOUND}</span>
        ) : (
          <MoviesCardList
            movies={foundMovies}
            savedMovies={savedMovies}
            saveMovie={saveMovie}
            unsaveMovie={unsaveMovie}
            isSavedMovie
          />
      )}
    </main>
  )

  // const [foundMovies, setFoundMovies] = useState([]);
  // const [request, setRequest] = useState('');
  // const [isShort, setIsShort] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  // const [isSearchComplete, setIsSearchComplete] = useState(false);

  // function handleSearch(request, isShort) {
  //   const result = filterShortMovies(savedMovies, request, isShort);

  //   setIsLoading(true);

  //   setFoundMovies(result);
  //   setRequest(request);
  //   setIsShort(isShort);
  //   setIsSearchComplete(true);
  //   setTimeout(() =>  setIsLoading(false), 500);
  // }

  // useEffect(() => {
  //   if (foundMovies.length > 0) {
  //     const result = filterShortMovies(savedMovies, request, isShort);
  //     setFoundMovies(result);
  //   }
  // }, [savedMovies]);

  // return (
  //   <main className='movies'>
  //     <SearchForm
  //       handleSearch={handleSearch}
  //     />
  //     {
  //       isLoading
  //       ? <Preloader />
  //       : isSearchComplete
  //         ? foundMovies.length > 0
  //           ? <MoviesCardList
  //               foundMovies={foundMovies}
  //               savedMovies={savedMovies}
  //               unsaveMovie={unsaveMovie}
  //             />
  //           : <span>{SEARCH_ERROR.NOT_FOUND}</span>
  //       : <MoviesCardList
  //           foundMovies={foundMovies}
  //           savedMovies={savedMovies}
  //           unsaveMovie={unsaveMovie}

  //         />
  //     }
  //   </main>
  // )
}

export default SavedMovies;
