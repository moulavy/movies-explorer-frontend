// компонент с вёрсткой баннера страницы «О проекте»
import React from 'react';
import './Promo.css';
import logoImg from '../../images/logo-bg.svg'
function Promo() {
   return (
      <section className="promo">         
            <img className="promo__logo" src={logoImg} alt="лого"/>
            <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>         
      </section>

   );
}

export default Promo;