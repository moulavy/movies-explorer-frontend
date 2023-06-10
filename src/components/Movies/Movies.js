//компонент страницы с поиском по фильмам
import React from 'react';
import './Movies.css';
import Header from '../Header/Header.js';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import ButtonMore from '../ButtonMore/ButtonMore.js'

function Movies() {
   const isLoggedIn = true;
   return (      
      <>
         <Header isLoggedIn={isLoggedIn} />
         <SearchForm />
         <MoviesCardList />
         <ButtonMore/>
      </>
   );
}

export default Movies;