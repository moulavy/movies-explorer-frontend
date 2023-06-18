import React, { useState, useEffect } from 'react';
import './Movies.css';
import Header from '../Header/Header.js';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import Footer from '../Footer/Footer.js';
import ButtonMore from '../ButtonMore/ButtonMore';
import NothingFound from '../NothingFound/NothingFound';
import Preloader from '../Preloader/Preloader';

function Movies({ onDeleteMovie, onAddMovie,  isLoading,  movies, saveMovies }) {
   const [searchMovies, setSearchMovies] = useState([]);
   const [isSearch, setIsSearch] = useState(false);
  
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

   function handleSearchRes(searchRes) {      
      setSearchMovies(searchRes);
      setIsSearch(true); 
   }

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
         <SearchForm  movies={movies} onSearch={handleSearchRes} />

         {isLoading ? (<Preloader />) : (
            <>
               {(isSearch && searchMovies.length === 0 &&
                  <NothingFound />
               )}

               <MoviesCardList
                  saveMovies={saveMovies}                 
                  onAddMovie={onAddMovie}
                  onDeleteMovie={onDeleteMovie}
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