import React, { useEffect, useState } from 'react';
import './SearchForm.css';
import searchIcon from '../../images/searchIcon.svg';
import FilterCheckBox from '../FilterCheckbox/FilterCheckBox.js';
import { MOBILE_SCREEN_FOR_SEARCH } from '../../utils/config';

function SearchForm({ input,
   onGetMovies,
   movies,
   onSearch,
   onChangeFilterShort,
   isPageSavedMovies }) {
   const [isMobileScreen, setIsMobileScreen] = useState(false);
   const [inputSearch, setInputSearch] = useState('');
   const [error, setError] = useState('');
   const [isSearch, setIsSearch] = useState(false);

   const onChange = (e) => {
      setInputSearch(e.target.value);
   }

   const onSubmit = (e) => {
      setIsSearch(true);
      e.preventDefault();
      if (inputSearch.trim() === '') {
         setError('Нужно ввести ключевое слово');
      }
      else {
         setError('');
         if (!isPageSavedMovies) {
            onGetMovies(inputSearch);
         }
         else {
            const searchRes = movies.filter((movie) => {
               return movie.nameRU.toLowerCase().includes(inputSearch.toLowerCase());
            })
            onSearch(searchRes);
         }
      };

   }


   useEffect(() => {
      function checkResolution() {
         const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
         setIsMobileScreen(screenWidth < MOBILE_SCREEN_FOR_SEARCH);
      }
      checkResolution();
      window.addEventListener('resize', checkResolution);
      return () => {
         window.removeEventListener('resize', checkResolution);
      };
   }, []);

   useEffect(() => {
      if (!isPageSavedMovies) {
         setInputSearch(input);
      }
   }, [input]);

   return (
      <section className="search">
         <div className="search__container">
            <form className="search__form">
               <img className="search__icon" alt="иконка поиска" src={searchIcon} />
               <input onChange={onChange} value={inputSearch} className="search__input" type="text" required placeholder="Фильм" />
               <div className="search__button-wrapper">
                  <button onClick={onSubmit} type="submit" className="search__button">
                     Найти
                  </button>
               </div>
               {!isMobileScreen && <FilterCheckBox movies={movies} isPageSavedMovies={isPageSavedMovies} onChangeFilterShort={onChangeFilterShort} />}
            </form>
            {isMobileScreen && (
               <div className="search__filter-wrapper">
                  <p className="search__error">{error}</p>
                  <FilterCheckBox movies={movies} isPageSavedMovies={isPageSavedMovies} onChangeFilterShort={onChangeFilterShort} />

               </div>
            )}
            {!isMobileScreen && <p className="search__error">{error}</p>}
         </div>
      </section>
   );
}

export default SearchForm;