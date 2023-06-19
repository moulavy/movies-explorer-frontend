import React,{useEffect} from 'react';
import './Register.css';
import Form from '../Form/Form.js';


function Register({ onRegister }) {
   const [email, setEmail] = React.useState('');
   const [name, setName] = React.useState('');
   const [password, setPassword] = React.useState('');
   const [emailError, setEmailError] = React.useState('');
   const [nameError, setNameError] = React.useState('');
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
   function handleChangeName(e) {
      setName(e.target.value);
      setNameError(e.target.validationMessage);
   }
   function handleChangeName(e) {
      const value = e.target.value;
      setName(value);
      const namePattern = /^[а-яА-ЯёЁa-zA-Z\s-]+$/;
      const isValid = value.trim() === '' || namePattern.test(value);

      if (isValid || value.trim() === '') {
         setNameError(e.target.validationMessage);
      } else {
         setNameError('Имя должно содержать только латиницу, кириллицу, пробелы и дефисы');
      }
   }
   
   const handleSubmit = (e) => {
      e.preventDefault();
      if (!email || !password || !name) {        
         return;
      }
      onRegister(email, name, password);
   }
   useEffect(() => {
      if (email && password && name && nameError === '' && emailError === '' && passwordError === '') {
         setVisibleButton(false);
         
      }
   },[email,name,password])

   return (
      <Form onSubmit={ handleSubmit} visibleButton={visibleButton} link="/signin" classNameInputs="form__inputs_value_register" title="Добро пожаловать!" linkText="Войти" textButton="Зарегистрироваться" question="Уже зарегистрированы?" children={
         <>
            <div className="form__group">
               <label className="form__label" htmlFor="name">Имя</label>
               <input autoComplete="off" type="text" id="name" onChange={handleChangeName} value={name} className="form__input form__name" name="name"
                  minLength="2" maxLength="35" required />
                <p className="form__error">{nameError}</p>
            </div>
            <div className="form__group">
               <label className="form__label" htmlFor="email">E-mail</label>
               <input onChange={handleChangeEmail} autoComplete="off" value={email} type="email" id="email" className="form__input form__email" name="email" required />
               <p className="form__error">{emailError}</p>
            </div>
            <div className="form__group">
               <label className="form__label" htmlFor="password">Пароль</label>
               <input autoComplete="off" onChange={handleChangePassword} value={password} type="password" id="password" className="form__input form__password" name="password" required />
               <p className="form__error">{passwordError}</p>
            </div>
         </>
      } />
   );
}

export default Register;