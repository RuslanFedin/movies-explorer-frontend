import './App.css';

import React, { useEffect, useState } from 'react';
import * as MainApi from '../../utils/MainApi';
import MoviesApi from '../../utils/MoviesApi';

import { CurrentUserContext } from '../../context/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import NotFound from '../NotFound/NotFound';

import {
  // MAIN_PAGE_PATH,
  // REG_PAGE_PATH,
  // AUTH_PAGE_PATH,
  // USER_PAGE_PATH,
  // SAVED_MOVIES_PAGE_PATH,
  // MOVIES_PAGE_PATH,
  // NOT_FOUND_PAGE_PATH,
  PATHS,
  RESPONSE_CODE,
  ERROR_MESSAGE,
  ShortDuration } from '../../utils/constants';
import { get } from 'react-hook-form';

function App() {
  const history = useHistory();
  const location = useLocation();

  const [loggedIn, setLoggedIn] = useState(false);
  const [navShown, setNavShown] = useState(false);

  const [currentUser, setCurrentUser] = useState({});

  const [savedMovies, setSavedMovies] = useState([]);
  const [movies, setMovies] = useState([]);
  const [foundMovies, setFoundMovies] = useState([]);
  const [renderedMovies, setRenderedMovies] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');


  // Проверка токена
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {return}
    if (token) {

      getUserInfo (token);
      getAllMovies();
      getSavedMovies();
    }
    return;

  }, [loggedIn]);

  // Закрыть меню
  function closeNav() {
    setNavShown(false);
  };

  // Получение данных пользователя
  function getUserInfo (token) {
    MainApi.getUserInfo(token)
    .then((res) => {
      setLoggedIn(true);
      setCurrentUser(res);
      history.push(location.pathname);
    })
    .catch((err) => {
      console.log(`ERROR: ${err}`);
      localStorage.removeItem('token');
      history.push(PATHS.MAIN_PAGE);
    });
  };



  // Обновление данных пользователя
  function updateUserInfo(data) {
    setCurrentUser(data);
  };

  // Получить все фиьмы из БД
  function getAllMovies() {
    return MoviesApi.getAllMovies()
      .then((res) => {
        localStorage.setItem('movies', JSON.stringify(res));
        setMovies(res);
      })
      .catch ((err) => {
        console.log(`ERROR: ${err}`);
      });
  }

  // Получить сохраненные фильмы из БД
  function getSavedMovies() {
    MainApi.getSavedMovies()
    .then((res) => {
      setSavedMovies(
        res.movie.map((savedMovie) => ({
          _id: savedMovie._id,
          movieId: savedMovie.movieId,
          country: savedMovie.country,
          image: savedMovie.image,
          description: savedMovie.description,
          duration: savedMovie.duration,
          nameEN: savedMovie.nameEN,
          nameRU: savedMovie.nameRU,
          year: savedMovie.year,
          trailerLink: savedMovie.trailerLink,
          director: savedMovie.director,
          thumbnail: savedMovie.thumbnail,
          owner: savedMovie.owner
        }))
      )
      localStorage.setItem('savedMovies', JSON.stringify(res.movie));
    })
    .catch ((err) => {
      console.log(`ERROR: ${err}`);
    });
  }

  // Проверить, сохраненный ли фильм
  function checkIsSavedMovie(movie) {

  }

  // Регистрация
  function onRegister({ email, password, name }) {
    setErrorMessage('');
    MainApi.register(email, password, name)
      .then((res) => {
        if (res) {
          onLogin({ email, password });
          setLoggedIn(true);
          setCurrentUser(res);
        }
      })
      .catch ((err) => {
        if (err === RESPONSE_CODE.CONFLICT) {
          setErrorMessage(ERROR_MESSAGE.REGISTER_409);
        } else if (err === RESPONSE_CODE.INTERNAL_SERVER_ERROR) {
          setErrorMessage(ERROR_MESSAGE.SERVER_500);
        } else {
          setErrorMessage(ERROR_MESSAGE.REGISTER_DEFAULT);
        }
      })
  };

  // Вход
  function onLogin ({ email, password }) {
    setErrorMessage('');
    MainApi.authorize(email, password)
      .then((res) => {
        localStorage.setItem('token', res.token);
        setLoggedIn(true);
        history.push(PATHS.MOVIES);
      })
      .catch ((err) => {
        if (err === RESPONSE_CODE.UNAUTHORIZED) {
          setErrorMessage(ERROR_MESSAGE.LOGIN_401);
        } else if (err === RESPONSE_CODE.INTERNAL_SERVER_ERROR) {
          setErrorMessage(ERROR_MESSAGE.SERVER_500);
        } else {
          setErrorMessage(ERROR_MESSAGE.LOGIN_DEFAULT);
        }
        // setIsLoading(false);
      })
  };

  // Выход
  function onSignOut() {
    localStorage.clear();
    setCurrentUser({});
    setLoggedIn(false);
    history.push(PATHS.MAIN_PAGE);
  };

  //Сбросить найденные фильмы и запрос при обновлении страницы
  useEffect(() =>{
    if (performance.navigation.type === 1) {
      localStorage.removeItem('foundMovies');
      localStorage.removeItem('request');
    }
  }, [])

  // Сохранить фильм
  function saveMovie(_movie) {
    MainApi.saveMovie(_movie)
    .then(({ movie }) => {
      const refreshedSavedMovies = [...savedMovies, {...movie, id: movie.movieId}];
      setSavedMovies(refreshedSavedMovies);
      localStorage.setItem('savedMovies', JSON.stringify(refreshedSavedMovies))
    })
    .catch ((err) => {
      console.log(`ERROR: ${err}`);
    });
  };

  // Удалить фильм
  function unsaveMovie(savedMovie) {
    MainApi.unsaveMovie(savedMovie._id)
    .then(() => {
      const refreshedSavedMovies = savedMovies.filter((item) => item._id !== savedMovie._id);
      setSavedMovies(refreshedSavedMovies);
      localStorage.setItem('savedMovies', JSON.stringify(refreshedSavedMovies));
    })
    .catch ((err) => {
      console.log(`ERROR: ${err}`);
    });
  };

  return (
  <CurrentUserContext.Provider value={currentUser}>
    <div className='app'>
      <Switch>

        <Route exact={true} path={PATHS.REGISTRATION}>
          <Register
            onRegister={onRegister}
            errorMessage={errorMessage}
            successMessage={successMessage}
            setErrorMessage={setErrorMessage}
          />
        </Route>

        <Route exact={true} path={PATHS.AUTHORIZATION}>
          <Login
            onLogin={onLogin}
            errorMessage={errorMessage}
            successMessage={successMessage}
            setErrorMessage={setErrorMessage}
          />
        </Route>

        <Route exact = {true} path = { PATHS.MAIN_PAGE}>
          <Header
            loggedIn={loggedIn}
            navShown={navShown}
            closeNav={closeNav}
            onClick={setNavShown}
          />
          <Main
          />
          <Footer />
        </Route>

        <ProtectedRoute exact = {true} path = { PATHS.MOVIES } loggedIn={loggedIn}>
          <Header
            loggedIn = {loggedIn}
            navShown = {navShown}
            closeNav = {closeNav}
            onClick = {setNavShown}
          />
          <Movies
            movies={movies}
            savedMovies={savedMovies}
            saveMovie={saveMovie}
            unsaveMovie={unsaveMovie}
          />
          <Footer />
        </ProtectedRoute>

        <ProtectedRoute exact = {true} path = { PATHS.SAVED_MOVIES } loggedIn={loggedIn}>
          <Header
            loggedIn = {loggedIn}
            navShown = {navShown}
            closeNav = {closeNav}
            onClick = {setNavShown}
          />
          <SavedMovies
            savedMovies={savedMovies}
            unsaveMovie={unsaveMovie}


            // getSavedMovies={getSavedMovies}
            // savedMoviesCards={savedMoviesCards}
            // foundSavedMoviesCards={foundSavedMoviesCards}
            // unsaveMovies={unsaveMovies}
            // searchMovie={searchMovie}
            // isShort={isShort}
            // setIsShort={setIsShort}
            // isFound={isFound}
            // setIsFound={setIsFound}
            // searchMessage={searchMessage}
            // setSearchMessage={setSearchMessage}
            // isLoading={isLoading}
            // message={message}
          />
          <Footer />
        </ProtectedRoute>

        <ProtectedRoute exact = {true} path = { PATHS.USER_PAGE } loggedIn={loggedIn}>
          <Profile
            getUserInfo={getUserInfo}
            onSignOut={onSignOut}
            updateUseInfo={updateUserInfo}
            // message={message}
          />
        </ProtectedRoute>

        <ProtectedRoute exact={true} path={PATHS.NOT_FOUND} loggedIn={loggedIn}>
          <NotFound />
        </ProtectedRoute>
      </Switch>
    </div>
  </CurrentUserContext.Provider>
  );
}

export default App;
