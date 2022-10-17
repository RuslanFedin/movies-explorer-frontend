import './FilterCheckbox.css';

import React from "react";

function FilterCheckbox() {
  return (
    <div className='filter-checkbox'>
      <input type="checkbox" className='filter-checkbox__checkbox' id='filter-checkbox__checkbox'></input>
      <label className='filter-checkbox__label'>Короткометражки</label>
    </div>
  );
}

export default FilterCheckbox;
