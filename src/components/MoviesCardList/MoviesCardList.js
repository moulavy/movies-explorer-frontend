import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard.js';
import Preloader from '../Preloader/Preloader';

function MoviesCardList({onAddMovie, movies, isPageSavedMovies, isLoading }) {
   return (
      <section className="movieslist">          
            <div className="movieslist__container">
            {movies.map((movie) => (
               <MoviesCard
                  onAddMovie={onAddMovie}
                  isPageSavedMovies={isPageSavedMovies}
                  movie={movie}
                  key={movie.id}
               />
            ))}
            </div>         
      </section>
   );
}

export default MoviesCardList;