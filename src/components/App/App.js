import React from 'react';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
function App() {
   return (
      <div className="page">         
         <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/signin' element={<Login />} />
            <Route path='/signup' element={<Register />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/saved-movies' element={<SavedMovies />} />
            <Route path="*" element={<PageNotFound/>}/>
         </Routes>       
      </div>
   );
}