const BASE_URL_MOVIE = 'https://api.nomoreparties.co/beatfilm-movies';

function checkResponse(res) {
   if (res.ok) {
      return res.json();
   }
   return Promise.reject(`Ошибка: ${res.status}`);
}

export const getMovies = () => {
   return fetch(`${BASE_URL_MOVIE}/`, {
      method: 'GET',
      headers: {
         'Content-Type': 'application/json',
      }
   })
      .then(checkResponse)
}