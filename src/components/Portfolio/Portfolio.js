import React from 'react';
import arrowImg from '../../images/arrow.svg';
import './Portfolio.css'

function Portfolio() {
   return (
      <section className="portfolio">
         <div className="portfolio__container">
            <h2 className="portfolio__title">Портфолио</h2>
            <nav className="portfolio__list">
               <a href="https://github.com/moulavy/how-to-learn" target="_blank" className="portfolio__item">
                  <p className="portfolio__item-title">Статичный сайт</p>
                  <img src={arrowImg} alt="стрелка" className="portfolio__item-img" />
               </a>
               <a href="https://moulavy.github.io/russian-travel/" target="_blank" className="portfolio__item">
                  <p className="portfolio__item-title">Адаптивный сайт</p>
                  <img src={arrowImg} alt="стрелка" className="portfolio__item-img" />
               </a>
               <a href="https://github.com/moulavy/react-mesto-api-full-gha" target="_blank" className="portfolio__item">
                  <p className="portfolio__item-title">Одностраничное приложение</p>
                  <img src={arrowImg} alt="стрелка" className="portfolio__item-img" />
               </a>
            </nav>
         </div>
      </section>
   );
}

export default Portfolio;