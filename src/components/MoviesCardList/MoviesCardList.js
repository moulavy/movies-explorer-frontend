import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard.js';
import Preloader from '../Preloader/Preloader';

function MoviesCardList({onDeleteMovie, saveMovies,onAddMovie, movies, isPageSavedMovies,  }) {
   return (
      <section className="movieslist">          
            <div className="movieslist__container">
            {movies.map((movie) => (
               <MoviesCard
                  onAddMovie={onAddMovie}
                  onDeleteMovie={onDeleteMovie}
                  isPageSavedMovies={isPageSavedMovies}
                  movie={movie}
                  key={isPageSavedMovies ? movie._id : movie.id}                  
                  saveMovies={saveMovies}
               />
            ))}
            </div>         
      </section>
   );
}

export default MoviesCardList;