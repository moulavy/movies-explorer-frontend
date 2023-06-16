import React from 'react';
import './ButtonMore.css';

function ButtonMore({ handleShowMore }) {
   return (
      <div className="button-more">
         <div className="button-more__container">
            <button className="button-more__button" onClick={handleShowMore}>
               Ещё
            </button>
         </div>
      </div>
   );
}

export default ButtonMore;