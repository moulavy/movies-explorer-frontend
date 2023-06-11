//компонент одной карточки фильма
import React from 'react';
import './MoviesCard.css';
import movieImg from '../../images/movieImg.png';
function MoviesCard() {
   const isLiked = true;
   return (
      <div className="movie">
         <img src={movieImg} alt="изображение фильма" className="movie__img" />
         <div className="movie__content">
            <h2 className="movie__title">33 слова о дизайне</h2>            
            <button className={(isLiked ? "movie__like movie__like_active" : "movie__like movie__like_inactive")}></button>
         </div>
         <p className="movie__time">1ч 42м</p>
      </div>
   );
}

export default MoviesCard;