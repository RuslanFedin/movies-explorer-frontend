import './FilterCheckbox.css';

import React, { useEffect, useState } from "react";

function FilterCheckbox({ onChange, isShort }) {

  const isShortToBoolean = isShort === 'true' ? true : false;

  const [checked, setChecked] = useState(isShortToBoolean);

  useEffect(() => {
    setChecked(isShortToBoolean)
  }, [isShortToBoolean]);

  function handleCheckboxChange(e) {
    onChange(e.target.checked);
    setChecked(e.target.checked);
  }

  console.log(isShort, isShortToBoolean, checked)

  return (
    <div className='filter-checkbox'>
      <input
        type="checkbox"
        className='filter-checkbox__checkbox'
        id='filter-checkbox__checkbox'
        checked={checked}
        onChange={handleCheckboxChange}
      ></input>
      <label htmlFor='checkbox' className='filter-checkbox__label'>Короткометражки</label>
    </div>
  );
}

export default FilterCheckbox;
