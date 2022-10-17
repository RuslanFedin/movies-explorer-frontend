import './AboutProject.css';

import React from "react";

function AboutProject() {
  return (
    <section className="about-project" id="about-project">
      <div className='main__content'>
        <h2 className="main__subtitle">
          О проекте
        </h2>
        <ul className='about-project__intro'>
          <li className='about-project__stage'>
            <h3 className='about-project__subtitle'>Дипломный проект включал 5 этапов</h3>
            <p className='main__text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </li>
          <li className='about-project__stage'>
            <h3 className='about-project__subtitle'>На выполнение диплома ушло 5 недель</h3>
            <p className='main__text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </li>
        </ul>
        <div className='about-project__timeline'>
          <div className='about-project__backend'>
            <p className='about-project__text about-project__text_frontend'>1 неделя</p>
            <p className='about-project__text about-project__text_sub'>Back-end</p>
          </div>
          <div className='about-project__frontend'>
            <p className='about-project__text about-project__text_backend'>4 недели</p>
            <p className='about-project__text about-project__text_sub'>Front-end</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
