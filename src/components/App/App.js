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
   const [searchMovies, setSearchMovies] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   useEffect(() => {
      setIsLoading(true);
      getMovies()
         .then((res) => {
            saveToLocal(res.reverse());
            getFromLocal();
            setIsLoading(false);
         })
         .catch((err) => {
            console.log(err);
            setIsLoading(false);
      })
   }, [])
   function saveToLocal(moviesList) {
      localStorage.setItem('movies', JSON.stringify(moviesList));
   }

   function getFromLocal() {          
      setMovies(JSON.parse(localStorage.getItem('movies')));    
   }

   const handleSearchRes = (searchRes) => {
      setSearchMovies(searchRes);
   }


   return (
      <div className="page">
         <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/signin' element={<Login />} />
            <Route path='/signup' element={<Register />} />
            <Route path='/profile' element={<Profile name="Виталий" />} />
            <Route path='/movies' element={<Movies isLoading={isLoading} searchMovies={ searchMovies}  movies={movies} onSearch={handleSearchRes} />} />
            <Route path='/saved-movies' element={<SavedMovies />} />
            <Route path="*" element={<PageNotFound />} />
         </Routes>

      </div>
   );
}
export default App;