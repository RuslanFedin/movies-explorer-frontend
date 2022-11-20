import { BASE_URL } from "./constants";

function _handleResponse(res) {
  return res.ok ? res.json() : Promise.reject(`ERROR: ${res.status}`);
}

export const register = (email, password, name) => {
  return fetch (`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type' : 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({email, password, name})
  })
  .then(_handleResponse);
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method:'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type' : 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({email, password})
  })
  .then(_handleResponse);
};

export const getUserInfo = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'authorization': `Bearer ${token}`,
    }
  })
  .then(_handleResponse);
};

export const updateUserInfo = (name, email) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify({
      name: name,
      email: email
    })
  })
  .then(_handleResponse);
}

export const getSavedMovies = () => {
  return fetch(`${BASE_URL}/movies`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  })
  .then(_handleResponse);
};

export const saveMovie = (data) => {
  return fetch(`${BASE_URL}/movies`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify(data),
  })
  .then(_handleResponse);
}

export const unsaveMovie = (movieId) => {
  return fetch(`${BASE_URL}/movies/${movieId}`, {
    method: 'DELETE',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  })
  .then(_handleResponse);
}
