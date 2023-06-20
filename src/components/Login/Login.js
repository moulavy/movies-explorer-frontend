import React, { useEffect } from 'react';
import './Login.css';
import Form from '../Form/Form.js';
function Login({ setError, onLogin, error }) {
   const [email, setEmail] = React.useState('');
   const [password, setPassword] = React.useState('');
   const [emailError, setEmailError] = React.useState('');
   const [passwordError, setPasswordError] = React.useState('');
   const [visibleButton, setVisibleButton] = React.useState(true);
   useEffect(() => {
      return () => {
         setError(''); // сброс ошибки при размонтировании компонента
      };
   }, []);
   function handleChangeEmail(e) {
      const value = e.target.value;
      setEmail(value);
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValid = value.trim() === '' || emailPattern.test(value);

      if (isValid || value.trim() === '') {
         setEmailError(e.target.validationMessage);
      } else {
         setEmailError('Неправильный формат email.');
      }
   }
   function handleChangePassword(e) {
      setPassword(e.target.value);
      setPasswordError(e.target.validationMessage);
   }

   const handleSubmit = (e) => {
      e.preventDefault();
      if (!email || !password) {
         return;
      }
      onLogin(email, password);
   }
   useEffect(() => {
      if (email && password && emailError === '' && passwordError === '') {
         setVisibleButton(false);
      }
      else {
         setVisibleButton(true);
      }
   }, [email, password])
   return (
      <Form error={error} onSubmit={handleSubmit} visibleButton={visibleButton} link="/signup" classNameInputs="form__inputs_value_login" title="Рады видеть!" linkText="Регистрация" textButton="Войти" question="Еще не зарегистрированы?" children={
         <>
            <div className="form__group">
               <label className="form__label" htmlFor="email">E-mail</label>
               <input value={email} onChange={handleChangeEmail} autoComplete="off" type="email" id="email" className="form__input form__email" name="email" required />
               <p className="form__error">{emailError}</p>
            </div>
            <div className="form__group">
               <label className="form__label" htmlFor="password">Пароль</label>
               <input onChange={handleChangePassword} value={password} autoComplete="off" type="password" id="password" className="form__input form__password" name="password" required />
               <p className="form__error">{passwordError}</p>
            </div>
         </>
      } />
   );
}

export default Login;