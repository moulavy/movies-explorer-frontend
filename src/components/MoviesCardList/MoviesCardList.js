import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard.js';
import Preloader from '../Preloader/Preloader';

function MoviesCardList({ movies, isPageSavedMovies, isLoading }) {
   return (
      <section className="movieslist">
         {isLoading ? (
            <Preloader />
         ) : (
            <div className="movieslist__container">
               {movies.map((movie) => (
                  <MoviesCard
                     isPageSavedMovies={isPageSavedMovies}
                     movie={movie}
                     key={movie.id}
                  />
               ))}
            </div>
         )}
      </section>
   );
}

export default MoviesCardList;