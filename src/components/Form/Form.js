import React from 'react';
import './Form.css';
import { Link } from 'react-router-dom';
import AuthTitle from '../AuthTitle/AuthTitle.js';
import logo from '../../images/logo.svg';

function Form({ title,children,textButton,question,linkText }) {
   return (
      <section className="form">
         <div className='form__container'>
            <img src={logo} alt="лого" className="form__logo" />
            <AuthTitle title={ title} />
            <form className='form__wrapper'>
               {children}
            </form>
            <button type="submit" className="form__button">{textButton}</button>
            <div className="form__question">
               <p className="form__question-text">{question}</p>
               <Link className="form__question-link">{ linkText}</Link>
            </div>
         </div>
      </section>
   );
}

export default Form;