import './MoviesCardList.css';

import React from "react";
import MoviesCard from '../MoviesCard/MoviesCard';

//Захардкодим карточки
import moviePic from "../../images/pic__COLOR_pic.jpg";
import moviePic2 from '../../images/pic__COLOR_pic2.jpg';
import moviePic3 from '../../images/pic__COLOR_pic3.png';
import moviePic4 from '../../images/pic__COLOR_pic4.jpg';
import moviePic5 from '../../images/pic__COLOR_pic5.jpg';
import moviePic6 from '../../images/pic__COLOR_pic6.jpg';
import moviePic7 from '../../images/pic__COLOR_pic7.jpg';
import moviePic8 from '../../images/pic__COLOR_pic8.jpg';
import moviePic9 from '../../images/pic__COLOR_pic9.jpg';
import moviePic10 from '../../images/pic__COLOR_pic10.jpg';
import moviePic11 from '../../images/pic__COLOR_pic11.jpg';
import moviePic12 from '../../images/pic__COLOR_pic12.jpg';

const moviesList = [
  {
    title: '33 слова о дизайне',
    pic: moviePic,
    time: '1ч 47м',
    isSaved: true,
  },
  {
    title: '33 слова о дизайне',
    pic: moviePic2,
    time: '1ч 47м',
    isSaved: true,
  },
  {
    title: '33 слова о дизайне',
    pic: moviePic3,
    time: '1ч 47м',
    isSaved: true,
  },
  {
    title: '33 слова о дизайне',
    pic: moviePic4,
    time: '1ч 47м',
    isSaved: false,
  },
  {
    title: '33 слова о дизайне',
    pic: moviePic5,
    time: '1ч 47м',
    isSaved: false,
  },
  {
    title: '33 слова о дизайне',
    pic: moviePic6,
    time: '1ч 47м',
    isSaved: false,
  },
  {
    title: '33 слова о дизайне',
    pic: moviePic7,
    time: '1ч 47м',
    isSaved: false,
  },
  {
    title: '33 слова о дизайне',
    pic: moviePic8,
    time: '1ч 47м',
    isSaved: false,
  },
  {
    title: '33 слова о дизайне',
    pic: moviePic9,
    time: '1ч 47м',
    isSaved: false,
  },
  {
    title: '33 слова о дизайне',
    pic: moviePic10,
    time: '1ч 47м',
    isSaved: false,
  },
  {
    title: '33 слова о дизайне',
    pic: moviePic11,
    time: '1ч 47м',
    isSaved: false,
  },
  {
    title: '33 слова о дизайне',
    pic: moviePic12,
    time: '1ч 47м',
    isSaved: false,
  },


];

function MoviesCardList({ isUserList }) {
  return (
    <section className='movie-card-list'>
      <ul className='movie-card-list__gallery'>
        {moviesList.map((movie) => (
          <MoviesCard
            title = {movie.title}
            pic = {movie.pic}
            time = {movie.time}
            isSaved = {movie.isSaved}
            isUserList={isUserList}
          />
        ))}
      </ul>
      <div className='movie-card-list__more'>
        <button className='movie-card-list__more-button'>Ещё</button>
      </div>
    </section>
  );
}

export default MoviesCardList;
