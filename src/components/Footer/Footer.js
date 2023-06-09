import React from 'react';
import './Footer.css'
function Footer() {
   return (
      <footer className="footer">
         <p className="footer__description">Учебный проект Яндекс.Практикум х BeatFilm.</p>
         <div className="footer__content">
            <p className="footer__year">2023</p>
            <ul className="footer__list">
               <li className="footer__list-item"><a href="https://practicum.yandex.ru/">Яндекс.Практикум</a></li>
               <li className="footer__list-item"><a href="https://github.com/moulavy">Github</a></li>
            </ul>
         </div>
      </footer>
   );
}

export default Footer;