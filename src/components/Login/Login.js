import './Login.css'

import React from 'react'
import Form from '../Form/Form';

export default function Login() {
  return (
    <main className="login">
      <Form
        type='signin'
      />
    </main>
  );
}

