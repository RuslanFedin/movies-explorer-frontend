import './MoviesCard.css';

import React from "react";

function MoviesCard({ title, time, pic, isUserList, isSaved }) {


  if (isUserList && isSaved)
  return (
    <li className="movies-card">
      <article className="movies-card__article">
        <div className="movies-card__header">
          <div className='movies-card__intro'>
            <h2 className="movies-card__title">{title}</h2>
            <p className='movie-card__time'>{time}</p>
          </div>
          <button
          className='movie-card__button movie-card__button_remove'
          ></button>
        </div>

        <img
          className="movies-card__image"
          src={pic}
          alt={title}
        />
      </article>
    </li>
  );

  if (!isUserList)
  return (
    <li className="movies-card">
      <article className="movies-card__article">
        <div className="movies-card__header">
          <div className='movies-card__intro'>
            <h2 className="movies-card__title">{title}</h2>
            <p className='movie-card__time'>{time}</p>
          </div>
          <button
          className='movie-card__button movie-card__button_bookmark'
          ></button>
        </div>

        <img
          className="movies-card__image"
          src={pic}
          alt={title}
        />
      </article>
    </li>
  );
}

export default MoviesCard;
