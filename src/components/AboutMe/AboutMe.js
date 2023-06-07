import React from 'react';
import './AboutMe.css'

function AboutMe() {
   return (
      <section className="about-me">
         <div className="about-me__container">
            <h2 className="about-me__title">Студент</h2>
            <div className="about-me__content">
               <div className="about-me__info">
                  <h3 className="about-me__name">Виталий</h3>
                  <h4 className="about-me__job">Фронтенд-разработчик, 30 лет</h4>
                  <p className="about-me__description">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
                     и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
                     После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                  <a href='#'>Github</a>
               </div>
               <img className='about-me__avatar' src="../../images/avatar.png" alt="аватар"/>
            </div>
         </div>
      </section>
   );
}

export default AboutMe;