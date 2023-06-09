import React from 'react';
import './AboutMe.css';
import aboutAvatarImg from '../../images/aboutAvatar.jpg';

function AboutMe() {
   return (
      <section className="about-me">
         <div className="about-me__container">
            <h2 className="about-me__title">Студент</h2>
            <div className="about-me__content">
               <div className="about-me__info">
                  <h3 className="about-me__name">Милана</h3>
                  <h4 className="about-me__job">Фронтенд-разработчик, 22 года</h4>
                                   
                  <p className="about-me__description">Я родилась в Астрахани, но недавно переехала в Санкт-Петербург. Закончила Астраханский Государственный Университет
                     по направлению "Прикладная математика и информатика". У меня есть муж. Я люблю играть в настольные игры, видеоигры, смотреть фильмы, сериалы и аниме, а также много гулять.
                  Начала кодить еще в университете, где мы изучали язык C++ для прикладных задач. Сейчас заканчиваю курс по веб-разработке и активно ищу работу в данной отрасли.</p>
                  <a className="about-me__github" href='https://github.com/moulavy'>Github</a>
               </div>
               <img className='about-me__avatar' src={aboutAvatarImg} alt="аватар"/>
            </div>
         </div>
      </section>
   );
}

export default AboutMe;