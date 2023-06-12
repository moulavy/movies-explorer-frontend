import React, { useState } from 'react';
import './Header.css';
import logoImg from '../../images/logo.svg';
import iconProfileImg from '../../images/iconProfile.svg'
import { Link } from 'react-router-dom';


function Header({ isLoggedIn }) {
   const [menu, setMenu] = useState(false);
   return (
      <header className={(isLoggedIn ? 'header header-movies' : 'header header-main')}>
         <div className={(isLoggedIn ? 'header__container header__container-movies' : 'header__container header__container-main')}>
            <Link to="/" className="header__logo">
               <img src={logoImg} alt="лого" />
            </Link>
            {isLoggedIn && (
               < button onClick={() => setMenu(!menu)} className={(menu ? "header__burger-close" : "header__burger-menu")} />
            )}
            {isLoggedIn ? (
               <div className={(menu ? "header__content header__content_open" : "header__content")} >
                  <nav className="header__movies-section">
                     <Link to="/" className='header__movies header__home'>Главная</Link>
                     <Link to="/movies" className='header__movies header__movies_enabled'>Фильмы</Link>
                     <Link to="/saved-movies" className='header__movies'>Сохраненные фильмы</Link>
                  </nav>
                  <div className="header__profile">
                     <Link to="/profile" className='header__profile-text'>Аккаунт</Link>
                     <Link to="/profile" ><img className='header__profile-img' src={iconProfileImg} alt="иконка профиля" /></Link>

                  </div>

               </div>
            ) : (
               <nav className='header__links'>
                  <Link to="/signup" className='header__registration'>Регистрация</Link>
                  <Link to="/signin" className='header__login'>Войти</Link>
               </nav>
            )
            }
         </div>
      </header>
   );
}

export default Header;