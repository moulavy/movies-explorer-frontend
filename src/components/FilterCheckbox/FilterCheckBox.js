//фильтр с чекбоксом «Только короткометражки».
import React from 'react';
import './FilterCheckBox.css';

function FilterCheckBox() {
   return (
      
         <div class="checkbox">
            <input type="checkbox" id="filter" className="checkbox__input"/>
               <label htmlFor="filter" className="checkbox__label"></label>
         </div>
      
   );
}

export default FilterCheckBox;