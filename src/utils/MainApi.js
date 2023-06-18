//export const BASE_URL = 'https://api.movies.moulavy.nomoredomains.rocks/';
export const BASE_URL_MAIN = 'http://localhost:3003';

function checkResponse(res) {
   if (res.ok) {
      return res.json();
   }
   return Promise.reject(`Ошибка: ${res.status}`);
}

export const register = (email, name, password)=>{
   return fetch(`${BASE_URL_MAIN}/signup`, {
      method: 'POST',
      headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email,name, password })
   })
   .then(checkResponse)
}

export const authorize = (email, password) => {
   return fetch(`${BASE_URL_MAIN}/signin`, {
      method: 'POST',
      headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password }),
      credentials: 'include'
   })
   .then(checkResponse)
}

export const checkToken = () => {
   return fetch(`${BASE_URL_MAIN}/users/me`, {
      method: 'GET',
      credentials: 'include',
      headers: {
         Accept: 'application/json',
         'Content-Type': 'application/json'
      }
   })
      .then(checkResponse)
}

export const getUserInfo = () => {
   return fetch(`${BASE_URL_MAIN}/users/me`, {
      method: 'GET',
      credentials: 'include',
      headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
      }
   })
   .then(checkResponse)
}

export const updateUserInfo = (data) => {   
   return fetch(`${BASE_URL_MAIN}/users/me`, {
      method: 'PATCH',
      headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
         name: data.name,
         email: data.email,
      })
   })
      .then(checkResponse);
}

export const logout = () => {   
   return fetch(`${BASE_URL_MAIN}/signout`, {      
      headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
      },
      credentials: 'include',      
   })
      .then(checkResponse);
}

export const addMovies=(data)=> {
   return fetch(`${BASE_URL_MAIN}/movies`, {
      method: 'POST',
      headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
         country:data.country,
         director: data.director,
         duration: data.duration,
         year: data.year,
         description: data.description,
         image: `https://api.nomoreparties.co/${data.image.url}`,
         trailerLink: data.trailerLink,
         nameRU: data.nameRU,
         nameEN: data.nameEN,
         thumbnail: `https://api.nomoreparties.co/${data.image.formats.thumbnail.url}`,
         movieId: data.id
      })
   })
      .then(checkResponse);
}