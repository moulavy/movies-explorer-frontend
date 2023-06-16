import React, { useEffect, useState } from 'react';
import '../../index.css';
import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main.js';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js'

import {getMovies} from '../../utils/MovieApi.js'
import Movies from '../Movies/Movies.js';
import Login from '../Login/Login.js';
import Register from '../Register/Register.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import Profile from '../Profile/Profile.js';
import PageNotFound from '../PageNotFound/PageNotFound.js'
function App() {
   const [movies, setMovies] = useState([]);
   useEffect(() => {
      getMovies()
         .then((res) => {
            setMovies(res);
            saveToLocal(movies);
         })
         .catch((err) => {
            console.log(err);
      })
   }, [movies])
   function saveToLocal(movies) {
      localStorage.setItem('movies', JSON.stringify(movies));
   }

   function getFromLocal() {
      const localMovies = localStorage.getItem('movies');
      
      return localMovies ? JSON.parse(localMovies) : [];
   }

   return (
      <div className="page">
         <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/signin' element={<Login />} />
            <Route path='/signup' element={<Register />} />
            <Route path='/profile' element={<Profile name="Виталий" />} />
            <Route path='/movies' element={<Movies movies={movies} />} />
            <Route path='/saved-movies' element={<SavedMovies />} />
            <Route path="*" element={<PageNotFound />} />
         </Routes>

      </div>
   );
}
export default App;