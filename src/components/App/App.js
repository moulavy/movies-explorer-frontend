import React, { useEffect, useState } from 'react';
import '../../index.css';
import { Route, Routes, Navigate,useNavigate } from 'react-router-dom';
import Main from '../Main/Main.js';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js'

import * as movieApi from '../../utils/MovieApi.js';
import * as mainApi from '../../utils/MainApi.js'
import Movies from '../Movies/Movies.js';
import Login from '../Login/Login.js';
import Register from '../Register/Register.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import Profile from '../Profile/Profile.js';
import PageNotFound from '../PageNotFound/PageNotFound.js'
function App() {
   const navigate = useNavigate();

   const [movies, setMovies] = useState([]);
   const [searchMovies, setSearchMovies] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   const [isSearch, setIsSearch] = useState(false);
   const [email, setEmail] = useState('');
   const [name, setName] = useState('');
   const [currentUser, setCurrentUser] = useState({ data: { name: "Имя", email: "Email" } });
   const [loggedIn, setLoggedIn] = useState(false);

   useEffect(() => {
      tokenCheckCallback();
      setIsLoading(true);
      if (loggedIn) {
         Promise.all([mainApi.getUserInfo(), movieApi.getMovies()])
            .then(([resUser, resMovies]) => {
               setCurrentUser(resUser);
               saveToLocal(resMovies.reverse());               
               setIsLoading(false);
            })
            .catch((err) => {
               console.log(err);
               setIsLoading(false);
            })
      }
   }, [loggedIn])

  
   function saveToLocal(moviesList) {
      localStorage.setItem('movies', JSON.stringify(moviesList));
   }

   function getFromLocal() {          
      setMovies(JSON.parse(localStorage.getItem('movies')));    
   }

   const handleSearchRes = (searchRes) => {
      getFromLocal();
      setSearchMovies(searchRes);
      setIsSearch(true);
   }

   const registerCallback = (email,name, password) => {
      mainApi.register(email,name, password)
         .then(() => {
             navigate("/signin", { replace: true });
         })
         .catch((err) => {            
            console.log(err);
         })         
   }

   const loginCallback = (email, password) => {
      mainApi.authorize(email, password)
         .then((data) => {            
            if (data.message === "Успешно вошли!") {
               localStorage.setItem('isAuth', true);
               setLoggedIn(true);
               navigate("/movies", { replace: true });
            }
         })
         .catch((err) => {     
            console.log(err);
         })
   }

   const tokenCheckCallback = () => {
      const isAuth = localStorage.getItem('isAuth');
      if (isAuth) {
         mainApi.checkToken()
            .then((res) => {
               setLoggedIn(true);
               setEmail(res.data.email);
               setName(res.data.name);
               navigate("/movies", { replace: true });
            })
            .catch((err) => {
               console.log(err);
            })
      }
   }

   function handleUpdateUser(data) {      
      mainApi.updateUserInfo(data)
         .then((res) => {
            setCurrentUser(res);          
         })
         .catch((err) => {
            console.log(err);
         })         
   }


   return (
      <div className="page">
         <CurrentUserContext.Provider value={currentUser}>
         <Routes>
            <Route path='/' element={<Main />} />
               <Route path='/signin' element={<Login onLogin={loginCallback} />} />
            <Route path='/signup' element={<Register onRegister={ registerCallback} />} />
            <Route path='/profile' element={<Profile onUpdateUser={handleUpdateUser} name={name} email={email} />} />
            <Route path='/movies' element={<Movies isSearch={isSearch} isLoading={isLoading} searchMovies={ searchMovies}  movies={movies} onSearch={handleSearchRes} />} />
            <Route path='/saved-movies' element={<SavedMovies />} />
            <Route path="*" element={<PageNotFound />} />
         </Routes>
      </CurrentUserContext.Provider>
      </div>
   );
}
export default App;