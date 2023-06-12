//компонент страницы с поиском по фильмам
import React from 'react';
import './Movies.css';
import Header from '../Header/Header.js';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import ButtonMore from '../ButtonMore/ButtonMore.js'
import Footer from '../Footer/Footer.js';

function Movies() {
   const isLoggedIn = true;
   const isPageSavedMovies = false;
   return (      
      <>
         <Header linkActive="movies" isLoggedIn={isLoggedIn} />
         <SearchForm />
         <MoviesCardList isPageSavedMovies={ isPageSavedMovies} />
         <ButtonMore />
         <Footer />
      </>
   );
}

export default Movies;