import React from 'react';
import './Profile.css';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

function Profile({ name }) {
   const isLoggedIn = true;
   return (
      <section className="profile">
         <div className="profile__container">
            <Header isLoggedIn={isLoggedIn} />
            <h1 className="profile__title">Привет, {name}!</h1>
            <form className="profile__wrapper">
               <div className="profile__group">
                  <label className="profile__label" htmlFor="name">Имя</label>
                  <input autoComplete="off" type="text" id="name" className="profile__input form__name" name="name"
                     minLength="2" maxLength="35" required value="Виталий"/>                 
               </div>
               <div className="profile__group">
                  <label className="profile__label" htmlFor="email">E-mail</label>
                  <input autoComplete="off" type="email" id="email" className="profile__input form__email" name="email"
                     required value="pochta@yandex.ru" />
               </div>
               <button type="submit" className="profile__button">Редактировать</button>
            </form>
            <Link to="/" className="profile__logout">Выйти из аккаунта</Link>
         </div>
      </section>
   );
}

export default Profile;