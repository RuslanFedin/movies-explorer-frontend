import { useState, useCallback } from 'react';

function FormValidity ( ) {
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setValues({ ...values, [name]: value });
        setErrors({ ...errors, [name]: target.validationMessage });
        // setIsValid(target.closest(formSelector).checkValidity());
    }

    const resetForm = useCallback((newValues = {}, newErrors = {}, newIsValid = false) => {
        setValues(newValues);
        setErrors(newErrors);
        setIsValid(newIsValid);
    }, [setValues, setErrors, setIsValid]);

    return { values, errors, isValid, handleChange, resetForm };

}

export default FormValidity;
