//компонент страницы «О проекте». Он будет содержать только презентационные компоненты и в будущем, за исключением шапки навигации.
import React from 'react';


function Main() {
   return (
      <>
         <Promo />
         <NavBar />
         <AboutProject />
         <Techs />
         <AboutMe />
         <Portfolio/>
      </>
   );
}

export default Main;