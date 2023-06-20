import React, { useState, useEffect } from 'react';
import './Movies.css';
import Header from '../Header/Header.js';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import Footer from '../Footer/Footer.js';
import ButtonMore from '../ButtonMore/ButtonMore';
import NothingFound from '../NothingFound/NothingFound';
import Preloader from '../Preloader/Preloader';

function Movies({ 
   filteredMovies,   
   onChangeFilterShort,
   input,
   isSearch,
   onGetMovies,
   onDeleteMovie,
   onAddMovie,
   isLoading,
   movies,
   setMovies,
   saveMovies }) {
   const isLoggedIn = true;
   const isPageSavedMovies = false;
   const [windowWidth, setWindowWidth] = useState(window.innerWidth);
   const [moviesToShow, setMoviesToShow] = useState(0);    

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

    const visibleMovies = filteredMovies.slice(0, moviesToShow);
   return (
      <>
         <Header linkActive="movies" isLoggedIn={isLoggedIn} />
         <SearchForm isPageSavedMovie={isPageSavedMovies}
            onGetMovies={onGetMovies}
            onChangeFilterShort={onChangeFilterShort}
            movies={movies}
            setMovies={setMovies}
            input={input}
            
             />

         {isLoading ? (<div className="movies__preloader"><Preloader /></div>) : (
            <>
               {(isSearch && filteredMovies.length === 0 &&
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
               {filteredMovies.length > moviesToShow && (
                  <ButtonMore handleShowMore={handleShowMore} />
               )}

            </>
         )}
         
         
         <Footer />
      </>
   );
}

export default Movies;