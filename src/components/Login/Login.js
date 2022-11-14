import './Login.css'

import React from 'react'
import Form from '../Form/Form';

export default function Login({ onLogin, errorMessage, setErrorMessage, successMessage}) {
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

