import React from 'react';
import './Profile.css';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

function Profile({ name }) {
   const isLoggedIn = true;
   return (
      <>
         <Header isLoggedIn={isLoggedIn} />
         <section className="profile">
            <div className="profile__container">

               <h1 className="profile__title">Привет, {name}!</h1>
               <form className="profile__wrapper">
                  <div className="profile__group profile__name">
                     <label className="profile__label" htmlFor="name">Имя</label>
                     <input autoComplete="off" type="text" id="name" className="profile__input profile__input-name" name="name"
                        minLength="2" maxLength="35" required value="Виталий" />
                  </div>
                  <div className="profile__group profile__email">
                     <label className="profile__label" htmlFor="email">E-mail</label>
                     <input autoComplete="off" type="email" id="email" className="profile__input profile__input-email" name="email"
                        required value="pochta@yandex.ru" />
                  </div>
                  <button type="submit" className="profile__button">Редактировать</button>
               </form>
               <Link to="/" className="profile__logout">Выйти из аккаунта</Link>
            </div>
         </section>
      </>
   );
}

export default Profile;