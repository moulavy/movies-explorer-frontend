//фильтр с чекбоксом «Только короткометражки».
import React,{useState} from 'react';
import './FilterCheckBox.css';

function FilterCheckBox({onChangeFilterShort}) {
   const [isCheckedShort, setIsCheckedShort] = useState(false);
   const onChange = () => {
      setIsCheckedShort(!isCheckedShort);
      onChangeFilterShort(!isCheckedShort);
   }
   return (
      <label htmlFor="filter" className="checkbox">
         <input type="checkbox" id="filter" checked={isCheckedShort} onChange={onChange} className="checkbox__input" />
         <div className="checkbox__container">
            <div className="checkbox__slider"></div>
            <span className="checkbox__text">Короткометражки</span>
         </div>
      </label>
   );
}

export default FilterCheckBox;