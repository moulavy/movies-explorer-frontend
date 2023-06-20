//фильтр с чекбоксом «Только короткометражки».
import React, { useState, useEffect } from 'react';
import './FilterCheckbox.css';

function FilterCheckBox({ onChangeFilterShort, isPageSavedMovies }) {
   const [isCheckedShort, setIsCheckedShort] = useState(false);
   const [isCheckedSaveShort, setIsCheckedSaveShort] = useState(false);
   useEffect(() => {
      if (!isPageSavedMovies) {
         const savedValue = localStorage.getItem('isCheckedShort');
         if (savedValue !== null) {
            setIsCheckedShort(JSON.parse(savedValue));
         }
      }
   }, []);

   const onChange = () => {
      if (!isPageSavedMovies) {
         const newValue = !isCheckedShort;
         setIsCheckedShort(newValue);
         localStorage.setItem('isCheckedShort', JSON.stringify(newValue));
         onChangeFilterShort(newValue);
      }
      else {
         setIsCheckedSaveShort(!isCheckedSaveShort);
         onChangeFilterShort(!isCheckedSaveShort)
      }
   };
   return (
      <label htmlFor="filter" className="checkbox">
         <input type="checkbox" id="filter" checked={isPageSavedMovies ? isCheckedSaveShort : isCheckedShort} onChange={onChange} className="checkbox__input" />
         <div className="checkbox__container">
            <div className="checkbox__slider"></div>
            <span className="checkbox__text">Короткометражки</span>
         </div>
      </label>
   );
}

export default FilterCheckBox;