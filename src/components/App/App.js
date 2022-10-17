import './App.css';

import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import { Route, Switch } from 'react-router-dom';
import NotFound from '../NotFound/NotFound';

function App() {
  return (
    <div className='app'>
      <Switch>
        <Route exact={true} path="/">
          <Header theme="dark" isLoggedIn={false}/>
          <Main />
          <Footer />
        </Route>

        <Route exact={true} path="/movies">
          <Header theme="light"/>
          <Movies />
          <Footer />
        </Route>

        <Route exact={true} path="/saved-movies">
          <Header theme="light"/>
          <SavedMovies/>
          <Footer />
        </Route>

        <Route exact={true} path="/profile">
          <Header theme="light"/>
          <Profile />
        </Route>

        <Route exact={true} path="/signup">
          <Register />
        </Route>

        <Route exact={true} path="/signin">
          <Login />
        </Route>

        <Route exact={true} path="/not-found">
          <NotFound />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
