import React from 'react';
import './Login.css';
import Form from '../Form/Form.js';
function Login() {
   return (
      <Form title="Рады видеть!" linkText="Регистрация" textButton="Войти" question="Еще не зарегистрированы?" children={
         <>            
            <div className="form__group">
               <label className="form__label" htmlFor="email">E-mail</label>
               <input autoComplete="off" type="email" id="email" className="form__input form__email" name="email" required />
               {/* <p className="form__error">Что-то пошло не так...</p> */}
            </div>
            <div className="form__group">
               <label className="form__label" htmlFor="password">Пароль</label>
               <input autoComplete="off" type="password" id="password" className="form__input form__password" name="password" required />
               {/* <p className="form__error">Что-то пошло не так...</p> */}
            </div>
         </>
      } />
   );
}

export default Login;