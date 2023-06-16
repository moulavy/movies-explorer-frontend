import React, { useState, useEffect } from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard.js';
import Preloader from '../Preloader/Preloader';

function MoviesCardList({ movies, isPageSavedMovies }) {
   const [windowWidth, setWindowWidth] = useState(window.innerWidth);
   const [cardsToShow, setCardsToShow] = useState(0);

   useEffect(() => {
      function handleResize() {
         setWindowWidth(window.innerWidth);
      }
      window.addEventListener('resize', handleResize);
      return () => {
         window.removeEventListener('resize', handleResize);
      };
   }, []);

   useEffect(() => {
      const calculateCardsToShow = () => {
         if (windowWidth >= 1280) {
            setCardsToShow(16);
         } else if (windowWidth >= 768) {
            setCardsToShow(8);
         } else {
            setCardsToShow(5);
         }
      };
      calculateCardsToShow();
   }, [windowWidth]);

   const isLoading = false;
   const visibleMovies = movies.slice(0, cardsToShow);

   return (
      <section className="movieslist">
         {isLoading ? (
            <Preloader />
         ) : (
            <div className="movieslist__container">
               {visibleMovies.map((movie) => (
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
