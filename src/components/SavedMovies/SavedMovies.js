//компонент страницы с сохранёнными карточками фильмов
import React from 'react';
import './SavedMovies.css';
import Header from '../Header/Header.js';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import ButtonMore from '../ButtonMore/ButtonMore.js'
import Footer from '../Footer/Footer.js';

function SavedMovies() {
   const isLoggedIn = true;
   const isPageSavedMovies = true;
   return (
      <>
         <Header isLoggedIn={isLoggedIn} />
         <SearchForm />
         <MoviesCardList isPageSavedMovies={isPageSavedMovies}    />
         <ButtonMore />
         <Footer />
      </>
   );
}

export default SavedMovies;