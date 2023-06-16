//компонент одной карточки фильма
import React, { useState } from 'react';
import './MoviesCard.css';
function MoviesCard({ movie,isPageSavedMovies }) {
   const [hovered, setHovered] = useState(false);

   const handleMouseEnter = () => {
      setHovered(true);
   };

   const handleMouseLeave = () => {
      setHovered(false);
   };

   const durationTransform = (duration) => {
      const hour = Math.floor(duration / 60);
      const minutes = duration % 60;
      return `${hour}ч ${minutes}м`;

   }
   const handleLike=()=>{

   }
   // console.log(movie.image.url);
   const isLiked = true;
   return (
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="movie">
         <img src={`https://api.nomoreparties.co/${movie.image.url}`} alt={movie.nameRU} className="movie__img" />
         <div className="movie__content">
            <h2 className="movie__title">{movie.nameRU}</h2>
            {(isPageSavedMovies ?
               <button className={(hovered ? "movie__button movie__delete" : "movie__button movie__delete_disabled")}></button> :
               <button className={(isLiked ? "movie__button movie__like_active" : "movie__button movie__like_inactive")}></button>
            )}
         </div>
         <p className="movie__time">{ durationTransform(movie.duration)}</p>
      </div>
   );
}

export default MoviesCard;