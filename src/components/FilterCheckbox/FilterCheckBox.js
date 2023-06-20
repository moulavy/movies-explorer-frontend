//фильтр с чекбоксом «Только короткометражки».
import React,{useState,useEffect} from 'react';
import './FilterCheckBox.css';

function FilterCheckBox({onChangeFilterShort}) {
   const [isCheckedShort, setIsCheckedShort] = useState(false);
   
   useEffect(() => {
      const savedValue = localStorage.getItem('isCheckedShort');
      if (savedValue !== null) {
         setIsCheckedShort(JSON.parse(savedValue));
      }
   }, []);

   const onChange = () => {
      const newValue = !isCheckedShort;
      setIsCheckedShort(newValue);
      localStorage.setItem('isCheckedShort', JSON.stringify(newValue));
      onChangeFilterShort(newValue);
   };
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