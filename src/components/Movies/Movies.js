import './Movies.css';

import React from "react";
import SearchForm from '../SearchForm/SearchForm';
// import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies( ) {
  return (
    <main className='movies'>
      <SearchForm />
      {/* <Preloader /> */}
      <MoviesCardList
        // isUserList ={false}
      />
    </main>
  );
}

export default Movies;
