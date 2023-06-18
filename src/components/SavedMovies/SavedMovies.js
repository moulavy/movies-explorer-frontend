//компонент страницы с сохранёнными карточками фильмов
import React, { useState } from 'react';
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
   function handleSearchRes(searchRes) {
      
      setSearchMovies(searchRes);
      setIsSearch(true);
   }
   
   return (
      <>
         <Header linkActive="saved-movies" isLoggedIn={loggedIn} />
         <SearchForm movies={saveMovies} onSearch={handleSearchRes} />
         {isLoading ? (<Preloader />) : (
            <>
               {(isSearch && searchMovies.length === 0 &&
                  <NothingFound />
               )}
               <MoviesCardList onDeleteMovie={onDeleteMovie} movies={isSearch ? searchMovies : saveMovies} saveMovies={saveMovies} isPageSavedMovies={isPageSavedMovies} />
            </>
         )}
         <Footer />
      </>
   );
}

export default SavedMovies;