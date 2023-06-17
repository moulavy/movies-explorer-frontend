import React,{useEffect} from 'react';
import './Login.css';
import Form from '../Form/Form.js';
function Login({ onLogin }) {
   const [email, setEmail] = React.useState('');
   const [password, setPassword] = React.useState('');
   const [emailError, setEmailError] = React.useState('');
   const [passwordError, setPasswordError] = React.useState('');
   const [visibleButton, setVisibleButton] = React.useState(true); 

   function handleChangeEmail(e) {   
      setEmail(e.target.value);
      setEmailError(e.target.validationMessage);
   }
   function handleChangePassword(e) {     
      setPassword(e.target.value);
      setPasswordError(e.target.validationMessage);
   }

   const handleSubmit = (e) => {
      e.preventDefault();
      if (!email || !password ) {
         return;
      }    
      onLogin(email, password);
   }
   useEffect(() => {
      if (email && password  && emailError === '' && passwordError === '') {
         setVisibleButton(false);

      }
   }, [email, password])
   return (
      <Form onSubmit={handleSubmit} visibleButton={visibleButton} link="/signup" classNameInputs="form__inputs_value_login" title="Рады видеть!" linkText="Регистрация" textButton="Войти" question="Еще не зарегистрированы?" children={
         <>
            <div className="form__group">
               <label className="form__label" htmlFor="email">E-mail</label>
               <input value={email}  onChange={handleChangeEmail} autoComplete="off" type="email" id="email" className="form__input form__email" name="email" required />
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