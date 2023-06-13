//компонент, который управляет отрисовкой карточек фильмов на страницу и их количеством
import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard.js';
import Preloader from '../Preloader/Preloader';

function MoviesCardList({ isPageSavedMovies }) {
   const isLoading = false;
   return (
      <section className="movieslist">
         {isLoading ? (<Preloader />) : (
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
         )
         }
      </section>
   );
}

export default MoviesCardList;