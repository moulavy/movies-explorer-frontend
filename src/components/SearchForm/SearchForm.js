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
            <button type="submit" className="searchButton">Найти</button>
            <FilterCheckBox />
            

        </form>
      </section>
   );
}

export default SearchForm;