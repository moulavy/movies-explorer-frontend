import React from 'react';
import './Profile.css';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Profile({ name }) {
   const isLoggedIn = true;
   const [isEdit,setIsEdit] = useState(false);
   const isDisabledButton = false;
   const [isDisabledInput,setIsDisabledInput]=useState(true);
   const [inputValueName, setInputValueName] = useState('Виталий');
   const [inputValueEmail, setInputValueEmail] = useState('pochta@yandex.ru');
   function editProfile(event) {
      event.preventDefault();
      setIsEdit(true);
      setIsDisabledInput(false);
   }
   function handleInputChangeName(event) {
      setInputValueName(event.target.value);
   }
   function handleInputChangeEmail(event) {
      setInputValueEmail(event.target.value);
   }

   return (
      <>
         <Header linkActive="profile" isLoggedIn={isLoggedIn} />
         <section className="profile">
            <div className="profile__container">
               <h1 className="profile__title">Привет, {name}!</h1>
               <form className="profile__wrapper">
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
                        value={inputValueName}
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
                        value={inputValueEmail}
                        onChange={handleInputChangeEmail}
                     />
                  </div>
                  {isEdit ?
                     <button type="submit" disabled={isDisabledButton} className={isDisabledButton ? "profile__button-save profile__button-save_disabled" : "profile__button-save"}>Сохранить</button>
                     : <button type="button" onClick={ editProfile} className="profile__button">Редактировать</button>                                       
                  }
               </form>
               { !isEdit &&
                  <Link to="/" className="profile__logout">Выйти из аккаунта</Link>
               }
            </div>
         </section>
      </>
   );
}

export default Profile;