import './MoviesCard.css';

import React from 'react';
import { MAIN_DB_URL, MOVIES_API_URL, PATHS } from '../../utils/constants';
import { useLocation } from 'react-router-dom';

function MoviesCard({
  movie,
  savedMovies,
  saveMovie,
  unsaveMovie,
  }) {

  const location = useLocation();

  const isSavedMovie = savedMovies.some((item) => item.movieId === movie.id);

  const saveButtonClass = isSavedMovie
    ? 'movie-card__button movie-card__button_bookmark  movie-card__button_bookmark_active'
    : 'movie-card__button movie-card__button_bookmark';

  function handleSaveMovie () {
    if (isSavedMovie) {
      const thisMovie = savedMovies.find((item) => item.movieId === movie.id);
      unsaveMovie(thisMovie);
    } else {
      saveMovie({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `${MAIN_DB_URL}${movie.image.url}`,
        trailerLink: movie.trailerLink,
        thumbnail: `${MOVIES_API_URL}${movie.image.formats.thumbnail.url}`,
        movieId: `${movie.id}`,
        nameRU: `${movie.nameRU}`,
        nameEN: `${movie.nameEN}`,
      });

    }
  }

  function handleUnsaveMovie() {
    unsaveMovie(movie);
  }

  function getMoviesDuration(movie) {
    const hours = Math.floor(movie.duration / 60);
    const minutes = movie.duration % 60;
    return ((hours === 0 ? '' : `${hours}ч`) + `${minutes}м`);
  }

  return (
    <li className="movies-card">
        <div className="movies-card__header">
          <div className='movies-card__intro'>
            <h2 className="movies-card__title">{movie.nameRU}</h2>
            <p className='movie-card__time'>{getMoviesDuration(movie)}</p>
          </div>

          { location.pathname === PATHS.MOVIES ?
            <button
              className={saveButtonClass}
              type='button'
              onClick={handleSaveMovie}
              >
            </button> : ''
          }
          {
            location.pathname === PATHS.SAVED_MOVIES ?
            <button
              className='movie-card__button movie-card__button_remove'
              type='button'
              onClick={handleUnsaveMovie}>
            </button> : ''
          }
        </div>

        { location.pathname === PATHS.MOVIES ?
          <a className='movies-card__link' href={movie.trailerLink} target='blank'>
            <img
              className="movies-card__image"
              src={MAIN_DB_URL + movie.image.url}
              alt={movie.nameRu}
            />
          </a> : ''
        }

        { location.pathname === PATHS.SAVED_MOVIES ?
          <a className='movies-card__link' href={movie.trailerLink} target='blank'>
            <img
              className="movies-card__image"
              src={movie.image}
              alt={movie.nameRu}
            />
          </a> : ''
        }
    </li>
  );
}

export default MoviesCard;
