//фильтр с чекбоксом «Только короткометражки».
import React from 'react';
import './FilterCheckBox.css';

function FilterCheckBox() {
   return (
      <label htmlFor="filter" className="checkbox">
         <input type="checkbox" id="filter" className="checkbox__input" />
         <div className="checkbox__container">            
            <div className="checkbox__slider"></div>
            <span className="checkbox__text">Короткометражки</span>
         </div>
      </label>
   );
}

export default FilterCheckBox;