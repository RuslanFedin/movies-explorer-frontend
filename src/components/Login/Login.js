import './Login.css'

import React, { useContext } from 'react'
import Form from '../Form/Form';
import { Redirect } from 'react-router-dom';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { PATHS } from '../../utils/constants';

export default function Login({ onLogin, errorMessage, setErrorMessage, successMessage, loggedIn }) {

  if (loggedIn === true) {
    return Redirect(PATHS.MAIN_PAGE);
  }

  return (
    <main className="login">
      <Form
        onLogin={onLogin}
        errorMessage={errorMessage}
        successMessage={successMessage}
        setErrorMessage={setErrorMessage}
      />
    </main>
  );
}

