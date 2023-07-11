import React from 'react';
import './ErrorMovies.css';


function ErrorMovies({ error }) {
   return (
      <div className="error-movies">
         <h1 className="error-movies__title">{error}</h1>
      </div>
   );
}

export default ErrorMovies;
