//компонент страницы «О проекте». Он будет содержать только презентационные компоненты и в будущем, за исключением шапки навигации.
import React from 'react';
import Promo from '../Promo/Promo.js';
import NavTab from '../NavTab/NavTab.js';
import AboutProject from '../AboutProject/AboutProject.js';
import Techs from '../Techs/Techs.js';
import AboutMe from '../AboutMe/AboutMe.js';
import Portfolio from '../Portfolio/Portfolio.js';
import Header from '../Header/Header.js'

function Main() {
   return (
      <>
         <Header/>
         <Promo />
         <NavTab />
         <AboutProject />
         <Techs />
         <AboutMe />
         <Portfolio />
      </>
   );
}

export default Main;