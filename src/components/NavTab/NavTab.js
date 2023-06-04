//компонент с навигацией по странице «О проекте».
import React from 'react';
import { Link } from 'react-router-dom';
import './NavTab.css'
function NavTab() {
   return (
      <nav className="navtab">
         <Link className="navtab__link">О проекте</Link>
         <Link className="navtab__link">Технологии</Link>
         <Link className="navtab__link">Студент</Link>
      </nav>
   );
}

export default NavTab;