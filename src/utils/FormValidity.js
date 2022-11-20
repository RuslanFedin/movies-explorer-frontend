import { useState, useCallback } from 'react';
import {isEmail} from 'validator';

function FormValidity ( ) {
  const [error, setError] = useState({});
  const [isValid, setIsValid] = useState(false);

  function handleValidity(e) {
    let trgt = (e.target) ? e.target : e;

    if (trgt.type === 'email' && !isEmail(trgt.value)) {
      setError({ ...error, [trgt.name]: 'Неверный формат электронной почты.' });
      setIsValid(false);
    }
    else if (!trgt.validity.valid) {
      if (trgt.validity.patternMismatch) {
        trgt.name === 'search' ?
          setError({ ...error, [trgt.name]: 'Введите ключевое слово.' }) :
          setError({ ...error, [trgt.name]: 'Неверный формат. Допускаются буквы, пробел или дефис и не менее двух символов.' });
      }
      else {
        setError({ ...error, [trgt.name]: trgt.validationMessage });
      }
      setIsValid(false);
    }
    else {
      setError({});
      setIsValid(true);
    }
  }

  return { error, isValid, setError, setIsValid, handleValidity };
}

export default FormValidity;
