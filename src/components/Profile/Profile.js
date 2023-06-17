import React from 'react';
import './Profile.css';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Profile({ onUpdateUser,onLogout }) {
   const currentUser = React.useContext(CurrentUserContext);
   const isLoggedIn = true;
   const [isEdit,setIsEdit] = useState(false);
   const isDisabledButton = false;
   const [isDisabledInput, setIsDisabledInput] = useState(true);
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
  
   useEffect(() => {      
      setName(currentUser.data.name);
      setEmail(currentUser.data.email);
      
   }, [currentUser]);

   function editProfile(event) {
      event.preventDefault();
      setIsEdit(true);
      setIsDisabledInput(false);
   }
   function handleInputChangeName(event) {
      setName(event.target.value);
   }
   function handleInputChangeEmail(event) {
      setEmail(event.target.value);
   }
   function handleSubmit(e) {
      e.preventDefault();
      onUpdateUser({
         name,
         email,
      });
   }

   return (
      <>
         <Header linkActive="profile" isLoggedIn={isLoggedIn} />
         <section className="profile">
            <div className="profile__container">
               <h1 className="profile__title">Привет, {name}!</h1>
               <form onSubmit={ handleSubmit} className="profile__wrapper">
                  <div className="profile__group profile__name">
                     <label className="profile__label" htmlFor="name">Имя</label>
                     <input disabled={isDisabledInput}
                        autoComplete="off"
                        type="text"
                        id="name"
                        className="profile__input profile__input-name"
                        name="name"
                        minLength="2"
                        maxLength="35"
                        required
                        value={name || ''}
                        onChange={handleInputChangeName}
                     />
                  </div>
                  <div className="profile__group profile__email">
                     <label className="profile__label" htmlFor="email">E-mail</label>
                     <input disabled={isDisabledInput}
                        autoComplete="off"
                        type="email"
                        id="email"
                        className="profile__input profile__input-email"
                        name="email"
                        required
                        value={email || ''}
                        onChange={handleInputChangeEmail}
                     />
                  </div>
                  {isEdit ?
                     <button type="submit" disabled={isDisabledButton} className={isDisabledButton ? "profile__button-save profile__button-save_disabled" : "profile__button-save"}>Сохранить</button>
                     : <button type="button" onClick={ editProfile} className="profile__button">Редактировать</button>                                       
                  }
               </form>
               { !isEdit &&
                  <Link onClick={onLogout} className="profile__logout">Выйти из аккаунта</Link>
               }
            </div>
         </section>
      </>
   );
}

export default Profile;