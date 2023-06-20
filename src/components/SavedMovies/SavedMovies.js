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
   const [searchSavedMovies, setSearchSavedMovies] = useState([]);
   const [isSearchSave, setIsSearchSave] = useState(false);
   const [isLoading, setIsLoading] = useState(false);
 
   const [isShortSaveFilmChecked, setIsShortSaveFilmChecked] = useState(false);
   const [inputSaveSearch, setInputSaveSearch] = useState('');
   function handleSearchRes(searchRes) {      
      setSearchSavedMovies(searchRes);
      setIsSearchSave(true);
   }
   const filterMovies = (movies) => {      
      if (isShortSaveFilmChecked) {
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
      const newSearchMovies = searchSavedMovies.filter((item) => item._id !== movie._id);
      setSearchSavedMovies(newSearchMovies);
   };

   const filteredSaveMovies = filterMovies(isSearchSave ? searchSavedMovies : saveMovies);

   function handleChangeFilterShort(value) {
      setIsShortSaveFilmChecked(value);
   }
   return (
      <>
         <Header linkActive="saved-movies" isLoggedIn={loggedIn} />
         <SearchForm inputSearch={inputSaveSearch}
            setInputSearch={setInputSaveSearch}
            isPageSavedMovies={isPageSavedMovies}
            onChangeFilterShort={handleChangeFilterShort}
            movies={saveMovies}
            onSearch={handleSearchRes} />
         {isLoading ? (<Preloader />) : (
            <>
               {(isSearchSave && filteredSaveMovies.length === 0 &&
                  <NothingFound />
               )}
               <MoviesCardList onDeleteMovie={onDeleteMovieComponent} movies={filteredSaveMovies} saveMovies={saveMovies} isPageSavedMovies={isPageSavedMovies} />
            </>
         )}
         <Footer />
      </>
   );
}

export default SavedMovies;