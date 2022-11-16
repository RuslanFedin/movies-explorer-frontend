import './MoviesCardList.css';

import React, { useState } from "react";
import MoviesCard from '../MoviesCard/MoviesCard';
import { SCREEN_WIDTH, QTY_CARD } from '../../utils/constants.js';

function MoviesCardList({
  foundMovies,
  movies,
  savedMovies,
  saveMovie,
  unsaveMovie,
}) {

  const [count, setCount] = useState(getInitialCount());
  const renderFoundMovies = foundMovies.slice(0, count);

  function clickMore() {
    setCount(count + getMore());
  }

  function getMore() {
    const screenWidth = getScreenWidth();
    if (screenWidth <= SCREEN_WIDTH.MED)
      return QTY_CARD.MORE_MED;

    if (screenWidth <= SCREEN_WIDTH.MIN)
      return QTY_CARD.MORE_MIN;

    return QTY_CARD.MORE_MAX;
  }

  function getInitialCount() {
    const screenWidth = getScreenWidth();
    if (screenWidth < SCREEN_WIDTH.MED)
      return QTY_CARD.MED;

    if (screenWidth < SCREEN_WIDTH.MIN)
      return QTY_CARD.MIN

    return QTY_CARD.MAX
  }

  function getScreenWidth() {
    return Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    );
  }

  return (
    <section className='movie-card-list'>
      <ul className='movie-card-list__gallery'>
        {renderFoundMovies.map((movie) => (
          <MoviesCard
            key = {movie.id || movie.movieId}
            movie={movie}
            movies={movies}
            savedMovies={savedMovies}
            saveMovie={saveMovie}
            unsaveMovie={unsaveMovie}
          />
        ))}
      </ul>
      <div className='movie-card-list__more'>
        {renderFoundMovies.length < foundMovies.length && (
          <button
            className='movie-card-list__more-button'
            type='button'
            onClick={clickMore}
          > Ещё </button>
        )}
      </div>
    </section>
  );
}

export default MoviesCardList;
