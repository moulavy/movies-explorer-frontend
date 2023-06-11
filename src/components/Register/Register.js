import React from 'react';
import './Register.css';
import Form from '../Form/Form.js';
function Register() {
   return (
      <Form title="Добро пожаловать!" linkText="Войти" textButton="Зарегистрироваться" question="Уже зарегистрированы?" children={
         <>
            <div className="form__group">
               <label className="form__label" htmlFor="name">Имя</label>
               <input autoComplete="off" type="text" id="name" className="form__input form__name" name="name"
                 minLength="2" maxLength="35" required/>               
               {/* <p className="form__error">Что-то пошло не так...</p> */}
            </div>
            <div className="form__group">
               <label className="form__label" htmlFor="email">E-mail</label>
               <input autoComplete="off" type="email" id="email" className="form__input form__email" name="email" required/>
               {/* <p className="form__error">Что-то пошло не так...</p> */}
            </div>
            <div className="form__group">
               <label className="form__label" htmlFor="password">Пароль</label>
               <input autoComplete="off" type="password" id="password" className="form__input form__password" name="password" required/>
               <p className="form__error">Что-то пошло не так...</p>
            </div>
         </>
      }/>
   );
}

export default Register;