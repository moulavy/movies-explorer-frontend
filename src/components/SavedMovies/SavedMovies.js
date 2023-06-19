//компонент страницы с сохранёнными карточками фильмов
import React, { useState,useEffect } from 'react';
import './SavedMovies.css';
import Header from '../Header/Header.js';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import Footer from '../Footer/Footer.js';
import NothingFound from '../NothingFound/NothingFound';
import Preloader from '../Preloader/Preloader';

function SavedMovies({ loggedIn, saveMovies, onDeleteMovie }) {
   const isPageSavedMovies = true;
   const [searchMovies, setSearchMovies] = useState([]);
   const [isSearch, setIsSearch] = useState(false);
   const [isLoading, setIsLoading] = useState(false);
   const [isShortFilmChecked, setIsShortFilmChecked] = useState(false);
   
   function handleSearchRes(searchRes) {      
      setSearchMovies(searchRes);
      setIsSearch(true);
   }
   const filterMovies = (movies) => {      
      if (isShortFilmChecked) {
         return movies.filter((movie) => movie.duration <= 40);
      } else {
         return movies;
      }
   };
   const onDeleteMovieComponent = (movie) => {
      onDeleteMovie(movie);
      handleDeleteMovieSearch(movie);

   }
   const handleDeleteMovieSearch = (movie) => {
            // Удаление фильма из массива searchMovies
      const newSearchMovies = searchMovies.filter((item) => item._id !== movie._id);
      setSearchMovies(newSearchMovies);
   };

   const filteredMovies = filterMovies(isSearch ? searchMovies : saveMovies);
   function handleChangeFilterShort(value) {
      setIsShortFilmChecked(value);
   }
   return (
      <>
         <Header linkActive="saved-movies" isLoggedIn={loggedIn} />
         <SearchForm onChangeFilterShort={handleChangeFilterShort} movies={saveMovies} onSearch={handleSearchRes} />
         {isLoading ? (<Preloader />) : (
            <>
               {(isSearch && filteredMovies.length === 0 &&
                  <NothingFound />
               )}
               <MoviesCardList onDeleteMovie={onDeleteMovieComponent} movies={filteredMovies} saveMovies={saveMovies} isPageSavedMovies={isPageSavedMovies} />
            </>
         )}
         <Footer />
      </>
   );
}

export default SavedMovies;