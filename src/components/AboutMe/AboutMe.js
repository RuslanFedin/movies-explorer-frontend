import './AboutMe.css';
import studentPic from '../../images/studentPic.jpg';
import arrowIcon from '../../images/linkArray.svg';
import { GITHUB_PAGE, HOW_TO_LEARN, RUSSIAN_TRAVEL, REACT_MESTO_API_FULL } from '../../utils/constants';

import React from "react";

function AboutMe() {
  return (
    <section className='about-me' id='about-me'>
      <div className='main__content'>
        <h2 className="main__subtitle">
          Студент
        </h2>
        <div className='about-me__card'>
          <div className='about-me__intro'>
            <h3 className='about-me__name'>Руслан</h3>
            <p className='about-me__datas'>Фронтенд-разработчик, 31 год</p>
            <p className='main__text about-me__datas_padding'>Я родился и живу в Калуге, закончил конструкторско-механический факультет МГТУ им.Н.Э.Баумана по специальности инженер подъемно-транспортных и строительно-дорожных машин. С 2013 года работаю инженером-конструктором. Занимался проектированием газотурбинных электроустановок, сейчас разрабатываю муниципальное снегоуборочное обордование. Я люблю слушать музыку, занимаюсь бегом и увлекаюсь дизайном. В 2019 году прошел курсы по диджитал дизайну в Московской Диджитал Академии, спроектировал дизайн нескольких посадочных страниц и интернет магазинов. После курсов решил углубиться в вэб-разработку и поступил в Я.Практикум для самореализации и покорения новых вершин.</p>
            <a className='about-me__link' href={GITHUB_PAGE} target="_blank" rel="noreferrer">Github</a>
          </div>
          <img className='about-me__picture' src={studentPic} alt='Моя фотография'/>
        </div>
        <div className='about-me__portfolio'>
          <h4 className='about-me__portfolio-title'>Портфолио</h4>
          <ul className='about-me__portfolio-list'>
            <li className='about-me__portfolio-item'>
              <p className='about-me__portfolio-text'>Статичный сайт</p>
              <a href={HOW_TO_LEARN} target="_blank" className='about-me__portfolio-link' rel="noreferrer"><img className='about-me__link-icon' src={arrowIcon} alt='ссылка на проект'/></a>
            </li>
            <hr className='about-me__line' />
            <li className='about-me__portfolio-item'>
              <p className='about-me__portfolio-text'>Адаптивный сайт</p>
              <a href={RUSSIAN_TRAVEL} target="_blank" className='about-me__portfolio-link' rel="noreferrer"><img className='about-me__link-icon' src={arrowIcon} alt='ссылка на проект'/></a>
            </li>
            <hr className='about-me__line' />
            <li className='about-me__portfolio-item'>
              <p className='about-me__portfolio-text'>Одностраничное приложение</p>
              <a href={REACT_MESTO_API_FULL} target="_blank" className='about-me__portfolio-link' rel="noreferrer"><img className='about-me__link-icon' src={arrowIcon} alt='ссылка на проект'/></a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
