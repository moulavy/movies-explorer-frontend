import React from 'react';
import './Register.css';
import AuthTitle from '../AuthTitle/AuthTitle.js';
import logo from '../../images/logo.svg';
function Register() {
   return (
      <section className='register'>
         <div className="register__container">
            <img src={logo} alt="лого" className="register__logo" />
            <AuthTitle />
         </div>
      </section>
   );
}

export default Register;