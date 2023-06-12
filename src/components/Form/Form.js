import React from 'react';
import './Form.css';
import { Link } from 'react-router-dom';
import AuthTitle from '../AuthTitle/AuthTitle.js';
import logo from '../../images/logo.svg';

function Form({ link, title, children, textButton, question, linkText, classNameInputs }) {

   return (
      <section className="form">
         <div className='form__container'>
            <Link to="/">
               <img src={logo} alt="лого" className="form__logo" />
            </Link>
            <AuthTitle title={title} />
            <form className='form__wrapper'>
               <div className={classNameInputs}>
                  {children}
               </div>
               <button type="submit" className="form__button">{textButton}</button>
            </form>

            <div className="form__question">
               <p className="form__question-text">{question}</p>
               <Link to={link} className="form__question-link">{linkText}</Link>
            </div>
         </div>
      </section>
   );
}

export default Form;