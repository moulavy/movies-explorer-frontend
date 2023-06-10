import React from 'react';
import './Header.css';
import logoImg from '../../images/logo.svg';
import iconProfileImg from '../../images/iconProfile.svg'
import { Link } from 'react-router-dom';
const isLoggedIn = false;
function Header() {
   return (
      <header className={(isLoggedIn ? 'header header-movies' : 'header header-main')}>
         <div className='header__container'>
            <img src={logoImg} alt="лого" />
            {isLoggedIn ? (
               <>
                  <nav className="header__movies-section">
                     <Link className='header__movies'>Фильмы</Link>
                     <Link className='header__movies'>Сохраненные фильмы</Link>
                  </nav>
                  <Link className='header__profile'>Аккаунт</Link>
                  <img src={iconProfileImg} alt="иконка профиля" />
               </>
            ) : (
               <nav className='header__links'>
                     <Link className='header__registration'>Регистрация</Link>
                     <Link className='header__login'>Войти</Link>
               </nav>
            )
            }
         </div>
      </header>
   );
}

export default Header;