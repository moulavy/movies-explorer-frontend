import React, { useEffect, useState } from 'react';
import '../../index.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.js';
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
   const [saveMovies, setSaveMovies] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   const [email, setEmail] = useState('');
   const [name, setName] = useState('');
   const [currentUser, setCurrentUser] = useState({ data: { name: "Имя", email: "Email" } });
   const [loggedIn, setLoggedIn] = useState(false);
   const [error, setError] = useState('');
   const [searchMovies, setSearchMovies] = useState([]);
   const [isSearch, setIsSearch] = useState(false);
   useEffect(() => {
      setError('');
      tokenCheckCallback();
      setIsLoading(true);
      if (loggedIn) {
         Promise.all([mainApi.getUserInfo(), mainApi.getMovies()])
            .then(([resUser, resSaveMovies]) => {
               const isMoviesEmpty = localStorage.getItem('movies') === undefined;
               if (!isMoviesEmpty) {
                  setMovies(JSON.parse(localStorage.getItem('movies')));
               }
               setCurrentUser(resUser);
               setSaveMovies(resSaveMovies);              
            })
            .catch((err) => {
               console.log(err);
            })
            .finally(() => {
               setIsLoading(false);
            })
      }
   }, [loggedIn])

   const saveToLocal = (moviesList) => {
      localStorage.setItem('movies', JSON.stringify(moviesList));
   }

    const getFromLocal = () => {
      setMovies(JSON.parse(localStorage.getItem('movies')));
    }
   function handleSearchRes(searchRes) {
      setSearchMovies(searchRes);
      setIsSearch(true);
   }

   const handleGetMovies = (inputSearch) => {
      movieApi.getMovies()
         .then((resMovies) => {
            saveToLocal(resMovies.reverse());
            setMovies(resMovies.reverse());
            const searchRes = resMovies.filter((movie) => {
               return movie.nameRU.toLowerCase().includes(inputSearch.toLowerCase());
            }) 
            handleSearchRes(searchRes);
             getFromLocal();
         })
         .catch((err) => {
            console.log(err);
         })      
   }


   const registerCallback = (email, name, password) => {
      setIsLoading(true);
      mainApi.register(email, name, password)
         .then(() => {
            navigate("/signin", { replace: true });
         })
         .catch((err) => {
            setError(err.message);
            console.log(err);            
         })
         .finally(() => {
            setIsLoading(false);
         })
   }

   const loginCallback = (email, password) => {
      setIsLoading(true);
      mainApi.authorize(email, password)
         .then((data) => {
            if (data.message === "Успешно вошли!") {
               localStorage.setItem('isAuth', true);
               setLoggedIn(true);
               navigate("/movies", { replace: true });
            }
         })
         .catch((err) => {
            setError(err.message);
            console.log(err);
         })
         .finally(() => {
            setIsLoading(false);
         })
   }

   const tokenCheckCallback = () => {
      setIsLoading(true);
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
            .finally(() => {
               setIsLoading(false);
            })
      }
   }

   const handleUpdateUser = (data) => {
      setIsLoading(true);
      mainApi.updateUserInfo(data)
         .then((res) => {
            setCurrentUser(res);
            setError('Данные успешно обновлены.');
         })
         .catch((err) => {
            console.log(err);
            setError(err.message);
         })
         .finally(() => {
            setIsLoading(false);
         })
   }
   const logoutCallback = () => {
      setIsLoading(true);
      mainApi.logout()
         .then(() => {
            setLoggedIn(false);
            localStorage.removeItem('isAuth');
            localStorage.removeItem('movies');
            navigate("/signin", { replace: true });
         })
         .catch((err) => {
            console.log(err);
         })
         .finally(() => {
            setIsLoading(false);
         })

   }

   const handleAddMovie = (data) => {
     
      mainApi.addMovies(data)
         .then((newMovie) => {
            setSaveMovies([newMovie.data, ...saveMovies]);
         })
         .catch((err) => {
            console.log(err);
         })
        
   }

   const handleDeleteMovie = (movie) => {
      
      mainApi.deleteMovie(movie._id)
         .then(() => {
            const newMovies = saveMovies.filter((item) => movie._id !== item._id);
            setSaveMovies(newMovies);
         })
         .catch((err) => {
            console.log(err);
         })
         
   }


   return (
      <div className="page">
         <CurrentUserContext.Provider value={currentUser}>
            <Routes>
               <Route path='/' element={<Main isLoggedIn={loggedIn} />} />
               <Route path='/signin' element={<Login error={error}
                  setError={setError}
                  onLogin={loginCallback} />} />
               <Route path='/signup' element={<Register
                  setError={setError}
                  onRegister={registerCallback}
                  error={ error} />} />
               <Route path='/profile' element={<ProtectedRoute
                  error={error}
                  setError={setError}
                  loggedIn={loggedIn}
                  element={Profile}
                  onUpdateUser={handleUpdateUser}
                  onLogout={logoutCallback}
                  name={name}
                  email={email} />} />
               <Route path='/movies'
                  element={<ProtectedRoute
                     onGetMovies={handleGetMovies}
                     loggedIn={loggedIn}
                     element={Movies}
                     onDeleteMovie={handleDeleteMovie}
                     saveMovies={saveMovies}
                     onAddMovie={handleAddMovie}
                     isLoading={isLoading}
                     movies={movies}
                     setMovies={setMovies}
                     isSearch={isSearch}
                     searchMovies={searchMovies}
                  />} />
               <Route path='/saved-movies'
                  element={<ProtectedRoute
                     loggedIn={loggedIn}
                     element={SavedMovies}
                     saveMovies={saveMovies}
                     onDeleteMovie={handleDeleteMovie}
                  />} />
               <Route path="*" element={<PageNotFound />} />
            </Routes>
         </CurrentUserContext.Provider>
      </div>
   );
}
export default App;