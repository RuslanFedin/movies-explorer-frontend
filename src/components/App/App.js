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
  PATHS,
  RESPONSE_CODE,
  ERROR_MESSAGE,
} from '../../utils/constants';

function App() {
  const history = useHistory();
  const location = useLocation();

  const [loggedIn, setLoggedIn] = useState(false);
  const [navShown, setNavShown] = useState(false);

  const [currentUser, setCurrentUser] = useState({});


  const [savedMovies, setSavedMovies] = useState([]);
  const [movies, setMovies] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {onSignOut()}
    else if (token) {
      getUserInfo (token);
      getAllMovies();
      getSavedMovies();
    }
    return;

  }, [loggedIn]);

  function closeNav() {
    setNavShown(false);
  };

  function getUserInfo (token) {
    MainApi.getUserInfo(token)
    .then(({ user }) => {
      setLoggedIn(true);
      setCurrentUser(user);
      history.push(location.pathname);
    })
    .catch((err) => {
      console.log(`ERROR: ${err}`);
      localStorage.removeItem('token');
      history.push(PATHS.MAIN_PAGE);
    });
  };

  function updateUserInfo({name, email}) {
    MainApi.updateUserInfo(name, email)
    .then(({ user }) => {
      setCurrentUser(user);
    })
    .catch((err) => {
      console.log(`ERROR: ${err}`);
    });
    console.log(currentUser);
  };

  function getAllMovies() {
    return MoviesApi.getAllMovies()
      .then((res) => {
        localStorage.setItem('movies', JSON.stringify(res));
        setMovies(res);
      })
      .catch ((err) => {
        console.log(`ERROR: ${err}`);
      })
  }

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
      })
  };

  function onSignOut() {
    localStorage.clear();
    setCurrentUser({});
    setLoggedIn(false);
    setSavedMovies([]);
    history.push(PATHS.MAIN_PAGE);
  };

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
            loggedIn={loggedIn}
            onRegister={onRegister}
            errorMessage={errorMessage}
            successMessage={successMessage}
            setErrorMessage={setErrorMessage}
          />
        </Route>

        <Route exact={true} path={PATHS.AUTHORIZATION}>
          <Login
            loggedIn={loggedIn}
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
            setMovies={setMovies}
            savedMovies={savedMovies}
            saveMovie={saveMovie}
            unsaveMovie={unsaveMovie}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            getAllMovies={getAllMovies}
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
            getAllMovies={getAllMovies}
          />
          <Footer />
        </ProtectedRoute>

        <ProtectedRoute exact = {true} path = { PATHS.USER_PAGE } loggedIn={loggedIn}>
          <Header
            loggedIn = {loggedIn}
            navShown = {navShown}
            closeNav = {closeNav}
            onClick = {setNavShown}
          />
          <Profile
            onSignOut={onSignOut}
            updateUserInfo={updateUserInfo}
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
