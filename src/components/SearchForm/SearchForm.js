import React, { useEffect, useState } from 'react';
import './SearchForm.css';
import searchIcon from '../../images/searchIcon.svg';
import FilterCheckBox from '../FilterCheckbox/FilterCheckBox.js';

function SearchForm({ onGetMovies,movies,setMovies, onSearch, onChangeFilterShort }) {
   const [isMobileScreen, setIsMobileScreen] = useState(false);
   const [inputSearch, setInputSearch] = useState('');
   const [error, setError] = useState('');   

   const onChange = (e) => {
      setInputSearch(e.target.value);
   }

   const onSubmit = (e) => {      
      e.preventDefault();
      if (inputSearch.trim() === '') {
         setError('Нужно ввести ключевое слово');
      }
      else {         
         setError('');
         const isMoviesEmpty = localStorage.getItem('movies') === null || JSON.parse(localStorage.getItem('movies')).length === 0;
         console.log(isMoviesEmpty);
         if (isMoviesEmpty) {
            onGetMovies();
         }      
         setMovies(JSON.parse(localStorage.getItem('movies')));
         const searchRes = movies.filter((movie) => {
            return movie.nameRU.toLowerCase().includes(inputSearch.toLowerCase());
         })         
         onSearch(searchRes);
      };

   }

   useEffect(() => {
      function checkResolution() {
         const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
         setIsMobileScreen(screenWidth < 686);
      }
      checkResolution();
      window.addEventListener('resize', checkResolution);
      return () => {
         window.removeEventListener('resize', checkResolution);
      };
   }, []);

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
               {!isMobileScreen && <FilterCheckBox onChangeFilterShort={onChangeFilterShort} />}
            </form>
            {isMobileScreen && (
               <div className="search__filter-wrapper">
                  <p className="search__error">{error}</p>
                  <FilterCheckBox onChangeFilterShort={onChangeFilterShort} />

               </div>
            )}
            {!isMobileScreen && <p className="search__error">{error}</p>}
         </div>
      </section>
   );
}

export default SearchForm;