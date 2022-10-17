import './SavedMovies.css';

import React from "react";
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies( ) {
  return (
    <main className='movies'>
      <SearchForm />
      {/* <Preloader /> */}
      <MoviesCardList
        isUserList ={true}
      />
    </main>
  )
}

export default SavedMovies;
