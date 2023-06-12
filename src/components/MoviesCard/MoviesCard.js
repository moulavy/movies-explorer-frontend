//компонент одной карточки фильма
import React, { useState } from 'react';
import './MoviesCard.css';
import movieImg from '../../images/movieImg.png';
function MoviesCard({ isPageSavedMovies }) {
   const [hovered, setHovered] = useState(false);

   const handleMouseEnter = () => {
      setHovered(true);
   };

   const handleMouseLeave = () => {
      setHovered(false);
   };
   const isLiked = true;
   return (
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="movie">
         <img src={movieImg} alt="изображение фильма" className="movie__img" />
         <div className="movie__content">
            <h2 className="movie__title">33 слова о дизайне</h2>
            {(isPageSavedMovies ?
               <button className={(hovered ? "movie__button movie__delete" : "movie__button movie__delete_disabled")}></button> :
               <button className={(isLiked ? "movie__button movie__like_active" : "movie__button movie__like_inactive")}></button>
            )}
         </div>
         <p className="movie__time">1ч 42м</p>
      </div>
   );
}

export default MoviesCard;