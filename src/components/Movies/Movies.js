import React, { useState, useEffect } from 'react';
import './Movies.css';
import Header from '../Header/Header.js';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import Footer from '../Footer/Footer.js';
import ButtonMore from '../ButtonMore/ButtonMore';

function Movies({ movies }) {
   const isLoggedIn = true;
   const isPageSavedMovies = false;
   const [windowWidth, setWindowWidth] = useState(window.innerWidth);
   const [cardsToShow, setCardsToShow] = useState(0);

   const isLoading = false;
   const visibleMovies = movies.slice(0, cardsToShow);

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

   const handleShowMore = () => {
      if (windowWidth >= 1280) {
         setCardsToShow(cardsToShow + 4);
      } else {
         setCardsToShow(cardsToShow + 2);
      } 
      
   };

   return (
      <>
         <Header linkActive="movies" isLoggedIn={isLoggedIn} />
         <SearchForm />
         <MoviesCardList
            movies={visibleMovies}
            isPageSavedMovies={isPageSavedMovies}
            isLoading={isLoading}
         />
         {movies.length > cardsToShow && (
            <ButtonMore handleShowMore={handleShowMore} />
         )}
         <Footer />
      </>
   );
}

export default Movies;