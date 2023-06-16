//компонент, который управляет отрисовкой карточек фильмов на страницу и их количеством
import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard.js';
import Preloader from '../Preloader/Preloader';

function MoviesCardList({ movies, isPageSavedMovies }) {
   const isLoading = false;
   return (
      <section className="movieslist">
         {isLoading ? (<Preloader />) : (
            <div className="movieslist__container">
               {movies.map((movie) => (
                  <MoviesCard isPageSavedMovies={isPageSavedMovies} movie={ movie} key={movie.id} />
               ))}
            </div>
         )
         }
      </section>
   );
}

export default MoviesCardList;