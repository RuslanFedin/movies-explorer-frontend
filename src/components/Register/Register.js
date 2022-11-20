import './Register.css';

import React, { useContext } from 'react'
import Form from '../Form/Form';
import { Redirect } from 'react-router-dom';
import { PATHS } from '../../utils/constants';

function Register({ onRegister, errorMessage, setErrorMessage, successMessage, loggedIn }) {

  if (loggedIn === true) {
    return Redirect(PATHS.MAIN_PAGE);
  }

  return (
    <main className="register">
      <Form
        onRegister={onRegister}
        errorMessage={errorMessage}
        successMessage={successMessage}
        setErrorMessage={setErrorMessage}
      />
    </main>
  );
}

export default Register;
