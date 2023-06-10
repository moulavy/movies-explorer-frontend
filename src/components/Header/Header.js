import React,{useState} from 'react';
import './Header.css';
import logoImg from '../../images/logo.svg';
import iconProfileImg from '../../images/iconProfile.svg'
import { Link } from 'react-router-dom';
const isLoggedIn = true;
const isOpen = false;

function Header() {
   const [menu, setMenu] = useState(false);
   return (
      <header className={(isLoggedIn ? 'header header-movies' : 'header header-main')}>
         <div className={(isLoggedIn ? 'header__container header__container-movies' : 'header__container header__container-main')}>
            <img src={logoImg} alt="лого" />
            <button onClick={() => setMenu(!menu)} className={(menu ? "header__burger-close" : "header__burger-menu")}></button>
            {isLoggedIn ? (
               <div className={(menu ? "header__content header__content_open" : "header__content")} >
                  <nav className="header__movies-section">
                     <Link className='header__movies header__home'>Главная</Link>
                     <Link className='header__movies header__movies_enabled'>Фильмы</Link>
                     <Link className='header__movies'>Сохраненные фильмы</Link>
                  </nav>
                  <div className="header__profile">
                  <Link className='header__profile-text'>Аккаунт</Link>
                     <img className='header__profile-img' src={iconProfileImg} alt="иконка профиля" />
                     
                  </div>

               </div>
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