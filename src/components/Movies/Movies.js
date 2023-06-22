import React, { useState, useEffect } from 'react';
import './Movies.css';
import Header from '../Header/Header.js';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import Footer from '../Footer/Footer.js';
import ButtonMore from '../ButtonMore/ButtonMore';
import NothingFound from '../NothingFound/NothingFound';
import Preloader from '../Preloader/Preloader';
import ErrorMovies from '../ErrorMovies/ErrorMovies';
import {SCREEN_CONFIG} from '../../utils/config.js'

function Movies({ error, setError,
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
   const currentPath = window.location.pathname;
   localStorage.setItem('currentPath', currentPath);
   useEffect(() => {
      return () => {
         setError(''); // сброс ошибки при размонтировании компонента
      };
   }, []);
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
         const currentScreenConfig = SCREEN_CONFIG.find(item => windowWidth >= item.SCREEN_WIDTH);         
         setMoviesToShow(currentScreenConfig.MOVIES_TO_SHOW);
      };
      calculateMoviesToShow();
   }, [windowWidth]);


   const handleShowMore = () => {
      const currentScreenConfig = SCREEN_CONFIG.find(item => windowWidth >= item.SCREEN_WIDTH)
      const moviesToAdd = currentScreenConfig.MOVIES_TO_ADD;
      setMoviesToShow(moviesToShow+moviesToAdd);
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
               {error !== '' && < ErrorMovies error={error} />}

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