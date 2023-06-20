import React from 'react';
import './Profile.css';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Preloader from '../Preloader/Preloader.js';

function Profile({ onUpdateUser, onLogout, error, setError, isLoading }) {
   const currentUser = React.useContext(CurrentUserContext);
   const isLoggedIn = true;
   const [isEdit, setIsEdit] = useState(false);

   const [isDisabledInput, setIsDisabledInput] = useState(true);
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [emailError, setEmailError] = React.useState('');
   const [nameError, setNameError] = React.useState('');

   const [isFormChanged, setIsFormChanged] = useState(false);
   const [isValidButton, setIsValidButton] = useState(false);
   const currentPath = window.location.pathname;
   localStorage.setItem('currentPath', currentPath);
   useEffect(() => {
      console.log(nameError)
      if (nameError === '' && emailError === '' && ((currentUser.data.name !== name) || (currentUser.data.email !== email)) && isFormChanged) {

         setIsValidButton(true);
      }
      else {
         setIsValidButton(false);
      }
   }, [nameError, emailError, name, email, isFormChanged])

   useEffect(() => {
      return () => {
         setError(''); // сброс ошибки при размонтировании компонента
      };
   }, []);

   useEffect(() => {
      setName(currentUser.data.name);
      setEmail(currentUser.data.email);

   }, [currentUser]);

   function editProfile(event) {
      event.preventDefault();
      setIsEdit(true);
      setIsDisabledInput(false);
   }
   function handleChangeEmail(e) {
      const value = e.target.value;
      setEmail(value);
      setIsFormChanged(true);
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValid = value.trim() === '' || emailPattern.test(value);

      if (isValid || value.trim() === '') {
         setEmailError(e.target.validationMessage);
      } else {
         setEmailError('Неправильный формат email.');
      }
   }
   function handleChangeName(e) {
      const value = e.target.value;
      setName(value);
      setIsFormChanged(true);
      const namePattern = /^[а-яА-ЯёЁa-zA-Z\s-]+$/;
      const isValid = value.trim() === '' || namePattern.test(value);

      if (isValid || value.trim() === '') {
         setNameError(e.target.validationMessage);
      } else {
         setNameError('Имя должно содержать только латиницу, кириллицу, пробелы и дефисы');
      }
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
               {isLoading && <Preloader />}
               <form onSubmit={handleSubmit} className="profile__wrapper">
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
                        onChange={handleChangeName}
                     />

                  </div>
                  <p className="profile__error">{nameError}</p>
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
                        onChange={handleChangeEmail}
                     />

                  </div>
                  <p className="profile__error">{emailError}</p>

                  {isEdit ?
                     <>{<p className="profile__button-error">{error}</p>}
                        <button type="submit" disabled={!isValidButton} className={!isValidButton ? "profile__button-save profile__button-save_disabled" : "profile__button-save"}>Сохранить</button></>
                     : <button type="button" onClick={editProfile} className="profile__button">Редактировать</button>
                  }

               </form>

               {!isEdit &&
                  <Link onClick={onLogout} className="profile__logout">Выйти из аккаунта</Link>
               }
            </div>
         </section>
      </>
   );
}

export default Profile;