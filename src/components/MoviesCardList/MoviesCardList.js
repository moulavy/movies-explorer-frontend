import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard.js';
import Preloader from '../Preloader/Preloader';

function MoviesCardList({onDeleteMovie, saveMovies,onAddMovie, movies,visibleMovies, isPageSavedMovies,  }) {
   return (
      <section className="movieslist">          
            <div className="movieslist__container">
            {visibleMovies.map((movie) => (
               <MoviesCard
                  onAddMovie={onAddMovie}
                  onDeleteMovie={onDeleteMovie}
                  isPageSavedMovies={isPageSavedMovies}
                  movie={movie}
                  key={movie.id}
                  movies={movies}
                  saveMovies={saveMovies}
               />
            ))}
            </div>         
      </section>
   );
}

export default MoviesCardList;