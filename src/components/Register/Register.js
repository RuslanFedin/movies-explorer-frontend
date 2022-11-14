import './Register.css';

import Form from '../Form/Form';

function Register({ onRegister, errorMessage, setErrorMessage, successMessage }) {

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
