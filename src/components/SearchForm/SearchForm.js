//форма поиска, куда пользователь будет вводить запрос
import React from 'react';
import './SearchForm.css';
import searchIcon from '../../images/searchIcon.svg';
import FilterCheckBox from '../FilterCheckbox/FilterCheckBox.js';
function SearchForm() {
   return (
      <section className="search">
         <form className="search__form">
            <img className="search__icon" alt="иконка поиска" src={searchIcon} />
            <input className="search__input" type="text" placeholder='Фильм' />
            <div className="search__button-wrapper">
               <button type="submit" className="search__button">Найти</button>
            </div>
            <FilterCheckBox />            
        </form>
      </section>
   );
}

export default SearchForm;