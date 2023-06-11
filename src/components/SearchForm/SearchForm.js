import React, { useEffect, useState } from 'react';
import './SearchForm.css';
import searchIcon from '../../images/searchIcon.svg';
import FilterCheckBox from '../FilterCheckbox/FilterCheckBox.js';

function SearchForm() {
   const [isMobileScreen, setIsMobileScreen] = useState(false);

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
               <input className="search__input" type="text" placeholder="Фильм" />
               <div className="search__button-wrapper">
                  <button type="submit" className="search__button">
                     Найти
                  </button>
               </div>
               {!isMobileScreen && <FilterCheckBox />}
            </form>
            {isMobileScreen && (
               <div className="search__filter-wrapper">
                  <FilterCheckBox />
               </div>
            )}
         </div>
      </section>
   );
}

export default SearchForm;
