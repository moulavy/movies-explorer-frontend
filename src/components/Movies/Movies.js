import React, { useState, useEffect } from 'react';
import './Movies.css';
import Header from '../Header/Header.js';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import Footer from '../Footer/Footer.js';
import ButtonMore from '../ButtonMore/ButtonMore';
import NothingFound from '../NothingFound/NothingFound';
import Preloader from '../Preloader/Preloader';

function Movies({onAddMovie,isSearch,isLoading, searchMovies, movies, onSearch }) {
   const isLoggedIn = true;
   const isPageSavedMovies = false;
   const [windowWidth, setWindowWidth] = useState(window.innerWidth);
   const [moviesToShow, setMoviesToShow] = useState(0);
   
   const visibleMovies = searchMovies.slice(0, moviesToShow);

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
      const calculateMoviesToShow = () => {
         if (windowWidth >= 1280) {
            setMoviesToShow(16);
         } else if (windowWidth >= 768) {
            setMoviesToShow(8);
         } else {
            setMoviesToShow(5);
         }
      };
      calculateMoviesToShow();
   }, [windowWidth]);

   const handleShowMore = () => {
      if (windowWidth >= 1280) {
         setMoviesToShow(moviesToShow + 4);
      } else {
         setMoviesToShow(moviesToShow + 2);
      }

   };
   return (
      <>
         <Header linkActive="movies" isLoggedIn={isLoggedIn} />
         <SearchForm  movies={movies} onSearch={onSearch} />

         {isLoading ? (<Preloader />) : (
            <>
               {(isSearch && searchMovies.length === 0 &&
                  <NothingFound />
               )}

               <MoviesCardList
                  onAddMovie={onAddMovie}
                  movies={visibleMovies}
                  isPageSavedMovies={isPageSavedMovies}
                  isLoading={isLoading}
               />
               {searchMovies.length > moviesToShow && (
                  <ButtonMore handleShowMore={handleShowMore} />
               )}

            </>
         )}
         
         
         <Footer />
      </>
   );
}

export default Movies;