//компонент страницы с сохранёнными карточками фильмов
import React from 'react';
import './SavedMovies.css';
import Header from '../Header/Header.js';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import ButtonMore from '../ButtonMore/ButtonMore.js'
import Footer from '../Footer/Footer.js';

function SavedMovies({loggedIn,saveMovies,onDeleteMovie}) {
  
   const isPageSavedMovies = true;
   return (
      <>
         <Header linkActive="saved-movies" isLoggedIn={loggedIn} />
         <SearchForm />
         <MoviesCardList onDeleteMovie={onDeleteMovie} movies={ saveMovies} saveMovies={saveMovies} isPageSavedMovies={isPageSavedMovies} />
         <Footer />
      </>
   );
}

export default SavedMovies;