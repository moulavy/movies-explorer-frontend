import React, { useState, useEffect } from 'react';
import './Header.css';
import logoImg from '../../images/logo.svg';
import iconProfileImg from '../../images/iconProfile.svg';
import { Link } from 'react-router-dom';

function Header({ linkActive, isLoggedIn }) {
   const [menu, setMenu] = useState(false);

   const toggleMenu = () => {
      setMenu(!menu);
   };

   useEffect(() => {
      const pageElement = document.querySelector('.page');
      if (pageElement) {
         if (menu) {
            pageElement.classList.add('menu-open');
         } else {
            pageElement.classList.remove('menu-open');
         }
      }
   }, [menu]);

   return (
      <header className={(linkActive !== 'home' ? 'header header-movies' : 'header header-main')}>
         <div className={(isLoggedIn ? 'header__container header__container-movies' : 'header__container header__container-main')}>
            <Link to="/" className="header__logo">
               <img src={logoImg} alt="лого" className="header__logo-img" />
            </Link>
            {isLoggedIn && (
               <button onClick={toggleMenu} className={(menu ? "header__burger-close" : "header__burger-menu")} />
            )}
            {isLoggedIn ? (
               <div className={(menu ? "header__content header__content_open" : "header__content")} >
                  <nav className="header__movies-section">
                     <Link to="/" className={(linkActive === "home" ? 'header__link_enabled header__movies header__home' : 'header__movies header__home')}>Главная</Link>
                     <Link to="/movies" className={(linkActive === "movies" ? 'header__movies header__link_enabled' : 'header__movies')}>Фильмы</Link>
                     <Link to="/saved-movies" className={(linkActive === "saved-movies" ? 'header__link_enabled header__movies' : 'header__movies')}>Сохраненные фильмы</Link>
                  </nav>
                  <div className="header__profile">
                     <Link to="/profile" className={(linkActive === "profile" ? 'header__link_enabled header__profile-text' : 'header__profile-text')}>Аккаунт</Link>
                     <Link to="/profile"><img className='header__profile-img' src={iconProfileImg} alt="иконка профиля" /></Link>
                  </div>
               </div>
            ) : (
               <nav className='header__links'>
                  <Link to="/signup" className='header__registration'>Регистрация</Link>
                  <Link to="/signin" className='header__login'>Войти</Link>
               </nav>
            )}
         </div>
      </header>
   );
}

export default Header;
