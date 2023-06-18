//компонент одной карточки фильма
import React, { useState } from 'react';
import './MoviesCard.css';
function MoviesCard({ onAddMovie,movie,isPageSavedMovies,movies,saveMovies }) {
   const [hovered, setHovered] = useState(false);
   
   const isLiked = saveMovies.some(savedMovie => savedMovie.movieId === movie.id);
   const handleMouseEnter = () => {
      setHovered(true);
   };

   const handleMouseLeave = () => {
      setHovered(false);
   };

   const durationTransform = (duration) => {
      const hour = Math.floor(duration / 60);
      const minutes = duration % 60;
      if (hour !== 0) {
         return `${hour}ч ${minutes}м`;
      }
      else {
         return `${minutes}м`;
      }

   } 
   const onLike = (e) => {
      e.preventDefault();
      onAddMovie(movie)
   }
   
   return (
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="movie">
         <img src={`https://api.nomoreparties.co/${movie.image.url}`} alt={movie.nameRU} className="movie__img" />
         <div className="movie__content">
            <h2 className="movie__title">{movie.nameRU}</h2>
            {(isPageSavedMovies ?
               <button className={(hovered ? "movie__button movie__delete" : "movie__button movie__delete_disabled")}></button> :
               <button onClick={onLike} className={(isLiked ? "movie__button movie__like_active" : "movie__button movie__like_inactive")}></button>
            )}
         </div>
         <p className="movie__time">{ durationTransform(movie.duration)}</p>
      </div>
   );
}

export default MoviesCard;