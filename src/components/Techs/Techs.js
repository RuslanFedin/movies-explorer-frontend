import './Techs.css';

import React from "react";

function Techs() {
  return (
    <section className='techs' id='techs'>
      <div className='main__content'>
        <h2 className="main__subtitle main__subtitle_second">
          Технологии
        </h2>
        <h3 className='techs__title'>7 технологий</h3>
        <p className='tech__text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <ul className='tech__list'>
          <li className='tech__list-item'>HTML</li>
          <li className='tech__list-item'>CSS</li>
          <li className='tech__list-item'>JS</li>
          <li className='tech__list-item'>React</li>
          <li className='tech__list-item'>Git</li>
          <li className='tech__list-item'>Express.js</li>
          <li className='tech__list-item'>mongoDB</li>
        </ul>
      </div>
    </section>
  );
}

export default Techs;
