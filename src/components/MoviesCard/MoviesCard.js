import React from 'react';
import { Link } from 'react-router-dom';
import './MoviesCard.css';
import { MINUTES_IN_HOUR } from '../../utils/config';

function MoviesCard({ onDeleteMovie, onAddMovie, movie, isPageSavedMovies, saveMovies }) {
   const isLiked = isPageSavedMovies
      ? true
      : saveMovies.some((savedMovie) => savedMovie.movieId === movie.id);

   const onLike = (e) => {
      e.preventDefault();
      if (!isLiked) {
         onAddMovie(movie);
      } else {
         const movieToDelete = saveMovies.find((item) => movie.id === item.movieId);
         onDeleteMovie(movieToDelete);
      }
   };

   const deleteMovie = () => {
      onDeleteMovie(movie);
   };

   const durationTransform = (duration) => {
      const hour = Math.floor(duration / MINUTES_IN_HOUR);
      const minutes = duration % MINUTES_IN_HOUR;
      if (hour !== 0) {
         return `${hour}ч ${minutes}м`;
      } else {
         return `${minutes}м`;
      }
   };

   return (
      <div className="movie">
         <Link to={movie.trailerLink} target="_blank">
            <img
               src={isPageSavedMovies ? movie.image : `https://api.nomoreparties.co/${movie.image.url}`}
               alt={movie.nameRU}
               className="movie__img"
            />
         </Link>
         <div className="movie__content">
            <h2 className="movie__title">{movie.nameRU}</h2>
            {isPageSavedMovies ? (
               <button onClick={deleteMovie} className="movie__button movie__delete"></button>
            ) : (
               <button
                  onClick={onLike}
                  className={isLiked ? 'movie__button movie__like_active' : 'movie__button movie__like_inactive'}
               ></button>
            )}
         </div>
         <p className="movie__time">{durationTransform(movie.duration)}</p>
      </div>
   );
}

export default MoviesCard;
