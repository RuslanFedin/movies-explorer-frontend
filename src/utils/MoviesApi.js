//Запросы к API beatfilm-movies

import { MOVIES_API_URL } from "./constants";

function _handleResponse(res) {
  return res.ok ? res.json() : Promise.reject(`ERROR: ${res.status}`);
}

const MoviesApi = {
  getAllMovies () {
      return fetch (MOVIES_API_URL, {
          method:'GET',
          headers : {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          }
      })
      .then(_handleResponse);
  }
}

export default MoviesApi;
