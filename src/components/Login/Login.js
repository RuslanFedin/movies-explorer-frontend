import './Login.css'

import React from 'react'
import Form from '../Form/Form';

export default function Login() {
  return (
    <section className="login">
      <Form
        type='signin'
      />
    </section>
  );
}

