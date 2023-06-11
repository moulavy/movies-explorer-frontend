//компонент, который управляет отрисовкой карточек фильмов на страницу и их количеством
import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard.js';

function MoviesCardList() {
   return (
      <section className="movieslist">
         <div className="movieslist__container">
            <MoviesCard /> 
            <MoviesCard /> 
            <MoviesCard /> 
            <MoviesCard /> 
            <MoviesCard /> 
            <MoviesCard /> 
            <MoviesCard /> 
            <MoviesCard /> 
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard /> 
         </div>
        
      </section>
   );
}

export default MoviesCardList;