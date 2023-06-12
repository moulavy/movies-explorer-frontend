//компонент, который управляет отрисовкой карточек фильмов на страницу и их количеством
import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard.js';

function MoviesCardList({ isPageSavedMovies }) {
   return (
      <section className="movieslist">
         <div className="movieslist__container">
            <MoviesCard isPageSavedMovies={isPageSavedMovies} />
            <MoviesCard isPageSavedMovies={isPageSavedMovies} />
            <MoviesCard isPageSavedMovies={isPageSavedMovies} />
            <MoviesCard isPageSavedMovies={isPageSavedMovies} />
            <MoviesCard isPageSavedMovies={isPageSavedMovies} />
            <MoviesCard isPageSavedMovies={isPageSavedMovies} />
            <MoviesCard isPageSavedMovies={isPageSavedMovies} />
            <MoviesCard isPageSavedMovies={isPageSavedMovies} />
            <MoviesCard isPageSavedMovies={isPageSavedMovies} />
            <MoviesCard isPageSavedMovies={isPageSavedMovies} />
            <MoviesCard isPageSavedMovies={isPageSavedMovies} />
            <MoviesCard isPageSavedMovies={isPageSavedMovies} />
            <MoviesCard isPageSavedMovies={isPageSavedMovies} />
            <MoviesCard isPageSavedMovies={isPageSavedMovies} />
            <MoviesCard isPageSavedMovies={isPageSavedMovies} />
            <MoviesCard isPageSavedMovies={isPageSavedMovies} />
         </div>

      </section>
   );
}

export default MoviesCardList;